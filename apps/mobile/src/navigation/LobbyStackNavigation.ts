import { createStackNavigator } from '@react-navigation/stack';

export type LobbyStackParamList = {
  New: undefined;
};

export const LobbyStack = createStackNavigator<LobbyStackParamList>();
