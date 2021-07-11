import { Alert } from 'react-native';

export const notifyMessage = (text: string) => {
  Alert.alert(text);
};
