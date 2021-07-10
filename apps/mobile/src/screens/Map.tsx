import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { RootStackParamList } from '../navigation/RootStackNavigator';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

type Props = {
  navigation: StackScreenProps<RootStackParamList, 'Map'>;
};

const Map: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
