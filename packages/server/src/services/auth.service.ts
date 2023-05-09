import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import userModel from '@/models/User';
import { isEmpty } from '@utils/util';
import { LoginUserDto } from '@/dtos/auth.dto';
import { FieldErrorResponse } from '@/exceptions/FieldError';
import { FieldError } from '@/../../types/src';

class AuthService {
  public users = userModel;

  public async register(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: User | null = await this.users.findOne({ email: userData.email });
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: User = await this.users.create({ ...userData, password: hashedPassword });

    return createUserData;
  }

  public async login(userData: LoginUserDto): Promise<{ cookie?: string; findUser?: User; errors?: FieldError[] }> {
    try {
      let errors: FieldError[] = [];
      if (isEmpty(userData)) {
        errors.push({ field: 'email', message: 'Please enter an email address' });
      }
      const findUser: User | null = await this.users.findOne({ email: userData.email });
      if (!findUser) {
        errors.push({ field: 'email', message: `The email "${userData.email}" was not found` });
      }
      const isPasswordMatching: boolean = await compare(userData.password, findUser!.password);
      if (!isPasswordMatching) {
        errors.push({ field: 'password', message: 'Incorrect Password' });
      }

      console.log(errors);
      if (errors.length > 0) {
        return { errors };
      } else if (findUser && isPasswordMatching) {
        const tokenData = this.createToken(findUser);
        const cookie = this.createCookie(tokenData);
        return { cookie, findUser };
      } else {
        throw new HttpException(500, 'Uncaught exception');
      }
    } catch (err) {
      throw new HttpException(500, 'Uncaught exception');
    }
  }

  public async logout(userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: User | null = await this.users.findOne({ email: userData.email, password: userData.password });
    if (!findUser) throw new HttpException(409, `This email ${userData.email} was not found`);

    return findUser;
  }

  public createToken(user: User): TokenData {
    if (typeof SECRET_KEY === 'undefined') {
      throw new Error('Secret key is undefined');
    }
    const dataStoredInToken: DataStoredInToken = { _id: user._id };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;
