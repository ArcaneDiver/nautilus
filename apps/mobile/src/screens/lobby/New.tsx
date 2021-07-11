import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LobbyStackParamList } from '../../navigation/LobbyStackNavigation';

type Props = {
  navigation: StackNavigationProp<LobbyStackParamList, 'New'>;
};

const New: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button containerStyle={styles.button} type="solid" title="New Lobby" />
      <Button
        containerStyle={styles.button}
        type="outline"
        title="Join Lobby"
      />
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

export default New;
