import { createContext, Dispatch, SetStateAction, useState } from 'react';

import { IUser } from '@/../types/dist';

interface UserContextType {
  user: IUser | null;
  setUser?: Dispatch<SetStateAction<IUser | null>>;
}

const UserContext = createContext<UserContextType>({
  user: null,
});

export default UserContext;
