import { ILogin, IUser } from './user';
// import { Dispatch, SetStateAction } from 'react';

/**
 * Field error
 * @public
 */
export type FieldError = {
  field: string;
  message: string;
};

export type UserContextType = {
  login: () => void;
  logout: () => void;
  user: IUser | null;
};

// export type AuthContextType = {
//   user: boolean | null;
//   login: (values: ILogin) => Promise<any>;
//   logout: () => void;
//   setUser?: Dispatch<SetStateAction<IUser | null>>;
// };

export type AuthContextType = {
  user: boolean | null;
  login: (values: ILogin) => Promise<any>;
  logout: () => void;
};
