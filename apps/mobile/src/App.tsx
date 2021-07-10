import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import { RootStack } from './navigation/RootStackNavigator';

import MapScreen from './screens/Map';
import Lobby from './screens/lobby/Lobby';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName="Lobby"
            screenOptions={{
              headerShown: false,
            }}
          >
            <RootStack.Screen name="Map" component={MapScreen} />
            <RootStack.Screen name="Lobby" component={Lobby} />
          </RootStack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
