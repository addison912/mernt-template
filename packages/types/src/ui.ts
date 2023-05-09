import { IUser } from './user';
import { ILogin } from './auth';
// import { Dispatch, SetStateAction } from 'react';

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
