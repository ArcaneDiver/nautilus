import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';

import { Wanted } from '@nautilus/types';
import { getIconUrlFromName } from '../api/avatar';

type Props = {
  wanted: Wanted[];
  onWantedClick: (wanted: Wanted) => void;
};

const WantedList: React.FC<Props> = ({ wanted, onWantedClick }) => {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      {wanted.map((w, i) => (
        <Avatar
          key={i}
          onPress={() => onWantedClick(w)}
          rounded
          source={{ uri: getIconUrlFromName(w.user.name) }}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 5,
  },
});
export default WantedList;
