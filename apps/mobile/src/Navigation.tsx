import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootStack } from './navigation/RootStackNavigator';
import AuthScreen from './screens/Auth';
import MapScreen from './screens/Map';
import Lobby from './screens/lobby/Lobby';

const Navigation = () => (
  <NavigationContainer>
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Lobby"
    >
      <RootStack.Screen name="Auth" component={AuthScreen} />
      <RootStack.Screen name="Map" component={MapScreen} />
      <RootStack.Screen name="Lobby" component={Lobby} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default Navigation;
