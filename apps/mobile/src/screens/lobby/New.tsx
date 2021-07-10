import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'react-native-elements';

import { LobbyStackParamList } from '../../navigation/LobbyStackNavigation';

type Props = {
  navigation: StackNavigationProp<LobbyStackParamList, 'New'>;
};
const New: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Button
        containerStyle={styles.button}
        onPress={() => {}}
        type="solid"
        title="New Lobby"
      />
      <Button
        containerStyle={styles.button}
        onPress={() => {}}
        type="outline"
        title="Join Lobby"
      />
    </View>
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

export default New;
