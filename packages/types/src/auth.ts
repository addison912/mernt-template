/**
 * Registration data
 * @public
 */
export interface IRegister {
  username: string;
  email: string;
  password: string;
}

/**
 * User Login
 * @public
 */
export interface ILogin {
  email: string;
  password: string;
}
