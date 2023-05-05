/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, ReactNode, useState } from 'react';
import { login } from '@utils/user';
import type { AuthContextType } from '@/../types';

const authContextDefaultValues: AuthContextType = {
  user: null,
  login: login,
  logout: () => {},
};

const AuthContext = createContext(authContextDefaultValues);

export function useAuth() {
  return useContext<AuthContextType>(AuthContext) as unknown;
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<boolean | null>(null);

  const logout = () => {
    setUser(false);
  };

  const value = {
    user,
    login,
    logout,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
