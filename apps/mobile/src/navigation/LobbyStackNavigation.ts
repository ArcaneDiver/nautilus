import { createStackNavigator } from '@react-navigation/stack';

export type LobbyStackParamList = {
  New: undefined;
  Room: {
    id: string;
  };
};

export const LobbyStack = createStackNavigator<LobbyStackParamList>();
