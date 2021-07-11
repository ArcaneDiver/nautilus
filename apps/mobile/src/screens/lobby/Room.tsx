import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Clipboard from '@react-native-community/clipboard';
import { ListItem, Avatar, SpeedDial, FAB } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LobbyStackParamList } from '../../navigation/LobbyStackNavigation';
import { notifyMessage } from '../../utils/notify';

type RoomScreenNavigationProp = StackNavigationProp<
  LobbyStackParamList,
  'Room'
>;
type RoomScreenRouteProp = RouteProp<LobbyStackParamList, 'Room'>;

const Room: React.FC = () => {
  const { navigate } = useNavigation<RoomScreenNavigationProp>();
  const {
    params: { id },
  } = useRoute<RoomScreenRouteProp>();

  const [isSpeedDialOpen, setIsSpeedDialOpen] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ListItem bottomDivider>
          <Avatar
            source={{
              uri: 'https://lh3.googleusercontent.com/a-/AOh14GhyNIOV7HHkTaJy_kMOYCeXhaJOB-penVEcmxeGhg=s96-c',
            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>Sasso</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
      <SpeedDial
        isOpen={isSpeedDialOpen}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setIsSpeedDialOpen(true)}
        onClose={() => setIsSpeedDialOpen(false)}
      >
        <SpeedDial.Action
          icon={{ name: 'playcircleo', type: 'antdesign', color: '#fff' }}
          title="Play"
          onPress={() => {}}
        />
        <SpeedDial.Action
          icon={{ name: 'copy1', type: 'antdesign', color: '#fff' }}
          title="Copy Lobby ID"
          onPress={() => {
            Clipboard.setString(id);

            notifyMessage('Copied to the clipboard');
          }}
        />
        <SpeedDial.Action
          icon={{ name: 'exit-to-app', type: 'material', color: '#fff' }}
          title="Exit"
          onPress={() => console.log('Add Something')}
        />
      </SpeedDial>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Room;

/**
 * <View style={styles.screenContainer}>
      <View>
        
      </View>
      <View style={styles.floatingButtonContainer}>
 */
