import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'react-native-elements';

import { RootStackParamList } from '../navigation/RootStackNavigator';
import { AuthState, useAuth } from '../store/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Auth'>;
};

const Auth: React.FC<Props> = () => {
  const { authState, signIn, logOut } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      {authState === AuthState.LOGGED_OUT ? (
        <Button
          containerStyle={styles.button}
          onPress={() => signIn()}
          type="solid"
          title="Log In"
        />
      ) : null}
      {authState === AuthState.LOGGED_IN ? (
        <Button
          containerStyle={styles.button}
          onPress={() => logOut()}
          type="outline"
          title="Log Out"
        />
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
  },
});

export default Auth;
