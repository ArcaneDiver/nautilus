import React from 'react';

import { LobbyStack } from '../../navigation/LobbyStackNavigation';
import New from './New';
import Room from './Room';

const Lobby: React.FC = () => (
  <LobbyStack.Navigator
    initialRouteName="Room"
    screenOptions={{
      headerShown: false,
    }}
  >
    <LobbyStack.Screen name="New" component={New} />
    <LobbyStack.Screen
      name="Room"
      component={Room}
      initialParams={{ id: 'kepèvskef+w' }}
    />
  </LobbyStack.Navigator>
);

export default Lobby;
