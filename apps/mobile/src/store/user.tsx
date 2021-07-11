/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

import { User } from '@nautilus/types';
import { AuthState, useAuth } from './auth';
import { auth0Client } from '../utils/auth0';
import { access } from 'node:fs';

export interface UserContextData {
  user?: User;

  refreshUser: () => void;
}

const UserStore = createContext<UserContextData>({} as UserContextData);

export const useUser = () => useContext(UserStore);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();
  const { authState, accessToken } = useAuth();

  const refreshUser = async () => {
    const info = await auth0Client.auth.userInfo({
      token: accessToken,
    });

    setUser({
      id: info.sub,
      name: info.name,
      picture: info.picture,
    });
  };

  useEffect(() => {
    if (authState !== AuthState.LOGGED_IN) {
      setUser(undefined);
    }

    refreshUser();
  }, [authState, accessToken]);

  return (
    <UserStore.Provider
      value={{
        user,
        refreshUser,
      }}
    >
      {children}
    </UserStore.Provider>
  );
};
