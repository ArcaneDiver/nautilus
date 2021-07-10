import React from 'react';

import { LobbyStack } from '../../navigation/LobbyStackNavigation';
import New from './New';

const Lobby: React.FC = () => (
  <LobbyStack.Navigator
    initialRouteName="New"
    screenOptions={{
      headerShown: false,
    }}
  >
    <LobbyStack.Screen name="New" component={New} />
  </LobbyStack.Navigator>
);

export default Lobby;
