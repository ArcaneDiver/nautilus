import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LobbyStackParamList } from './LobbyStackNavigation';

export type RootStackParamList = {
  Lobby: NavigatorScreenParams<LobbyStackParamList>;
  Map: undefined;
};

export const RootStack = createStackNavigator<RootStackParamList>();
