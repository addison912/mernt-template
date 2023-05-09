import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { LoginUserDto } from '@dtos/auth.dto';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';
import { UserResponse } from '@/../../types/src';

class AuthController {
  public authService = new AuthService();

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const registerUserData: User = await this.authService.register(userData);

      res.status(201).json({ data: registerUserData, message: 'register' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('login controller');
      const userData: LoginUserDto = req.body;
      const { cookie, findUser } = await this.authService.login(userData);
      const response: UserResponse = { user: findUser };
      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.body.user;
      const logOutUserData: User = await this.authService.logout(userData);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: logOutUserData, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
