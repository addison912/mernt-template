export type IUser = {
  _id: string;
  email: string;
  username: string;
  authenticated: boolean;
  date_created?: Date;
  date_updated?: Date;
  last_login?: Date;
  fname?: string;
  lname?: string;
  profilePic?: string;
  ftid?: string;
};

/**
 * User profile
 * @public
 */
export interface UserModel extends IUser {
  password: string;
}

/**
 * People in family tree
 * @public
 */
export interface IPerson {
  ftid: string;
  fname: string;
  mname?: string;
  lname: string;
  profilePic?: string;
  description?: string;
  birthDate?: string;
  deathDate?: string;
  father?: IPerson[];
  mother?: IPerson[];
  spouse?: IPerson[];
  children?: IPerson[];
}

/**
 * Google user object
 * @public
 */
export interface IGoogleUser {
  email: string;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
}
