import React, { useContext, createContext, useEffect, useState } from 'react';
import { Credentials, RefreshTokenResponse } from 'react-native-auth0';
import Toast from 'react-native-toast-message';

import { LocalStorage } from '../services/storage';
import { auth0Client } from '../utils/auth0';
import { User } from '@nautilus/types';

const KEY_ACCESS_TOKEN = '@auth/accessToken';
const KEY_REFRESH_TOKEN = '@auth/refreshToken';
const KEY_ID_TOKEN = '@auth/idToken';

const SCOPE = 'openid email profile offline_access';

export enum AuthState {
  LOADING,
  LOGGED_IN,
  LOGGED_OUT,
}

export interface AuthContextData {
  authState: AuthState;

  accessToken?: string;
  refreshToken?: string;
  idToken?: string;

  regenAccessToken: () => void;

  signIn: () => void;
  logOut: () => void;
}

const AuthStore = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => useContext(AuthStore);

export const AuthProvider: React.FC = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(AuthState.LOADING);

  const [accessToken, setAccessToken] = useState<string>();
  const [refreshToken, setRefreshToken] = useState<string>();
  const [idToken, setIdToken] = useState<string>();

  const retrieveTokensFromStorage = async () => {
    try {
      const accToken = await LocalStorage.getValue(KEY_ACCESS_TOKEN);
      const refToken = await LocalStorage.getValue(KEY_REFRESH_TOKEN);
      const iToken = await LocalStorage.getValue(KEY_ID_TOKEN);

      if (accToken && refToken && iToken) {
        setAccessToken(accToken);
        setRefreshToken(refToken);
        setIdToken(iToken);

        setAuthState(AuthState.LOGGED_IN);
      } else {
        setAuthState(AuthState.LOGGED_OUT);
      }
    } catch (e) {
      setAuthState(AuthState.LOGGED_OUT);
    }
  };

  const storeTokens = async (
    accToken: string,
    refToken: string,
    iToken: string
  ) => {
    await LocalStorage.setValue(KEY_ACCESS_TOKEN, accToken);
    await LocalStorage.setValue(KEY_REFRESH_TOKEN, refToken);
    await LocalStorage.setValue(KEY_ID_TOKEN, iToken);
  };

  const setTokens = async (
    accessToken: string,
    refreshToken: string,
    idToken: string
  ) => {
    await storeTokens(accessToken, refreshToken, idToken);

    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setIdToken(idToken);
  };

  const clearTokens = async () => {
    await LocalStorage.removeValue(KEY_ACCESS_TOKEN);
    await LocalStorage.removeValue(KEY_REFRESH_TOKEN);
    await LocalStorage.removeValue(KEY_ID_TOKEN);
  };

  const regenAccessToken = async () => {
    let newCredentials: RefreshTokenResponse;

    try {
      newCredentials = await auth0Client.auth.refreshToken({
        refreshToken,
        scope: SCOPE,
      });
    } catch (e) {
      setAuthState(AuthState.LOGGED_OUT);
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Auth - Regen Token',
        text2: e.message,
        visibilityTime: 3000,
      });

      return;
    }

    try {
      await storeTokens(
        newCredentials.accessToken,
        newCredentials.refreshToken as string,
        newCredentials.idToken
      );
    } catch (e) {
      setAuthState(AuthState.LOGGED_OUT);
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Auth - Store',
        text2: e.message,
        visibilityTime: 3000,
      });

      return;
    }
  };

  const signIn = async () => {
    setAuthState(AuthState.LOADING);

    let credentials: Credentials;
    try {
      credentials = await auth0Client.webAuth.authorize({
        scope: SCOPE,
      });
    } catch (e) {
      setAuthState(AuthState.LOGGED_OUT);

      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Auth - WebAuth',
        text2: e.message,
        visibilityTime: 3000,
      });

      return;
    }

    try {
      await setTokens(
        credentials.accessToken,
        credentials.refreshToken,
        credentials.idToken
      );
    } catch (e) {
      setAuthState(AuthState.LOGGED_OUT);
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Auth - Store',
        text2: e.message,
        visibilityTime: 3000,
      });

      return;
    }

    setAuthState(AuthState.LOGGED_IN);
  };

  const logOut = async () => {
    try {
      await auth0Client.webAuth.clearSession();
      await clearTokens();

      setAuthState(AuthState.LOGGED_OUT);
    } catch (e) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Auth - Clear',
        text2: e.message,
        visibilityTime: 3000,
      });
    }
  };

  useEffect(() => {
    retrieveTokensFromStorage();
  }, []);

  return (
    <AuthStore.Provider
      value={{
        authState,

        accessToken,
        refreshToken,
        idToken,

        regenAccessToken,

        signIn,
        logOut,
      }}
    >
      {children}
    </AuthStore.Provider>
  );
};
