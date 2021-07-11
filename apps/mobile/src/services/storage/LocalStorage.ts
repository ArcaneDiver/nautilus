import AsyncStorage from '@react-native-async-storage/async-storage';

import { IStorage } from './IStorage';

export class LocalStorage implements IStorage {
  setValue(key: string, value: string) {
    return AsyncStorage.setItem(key, value);
  }

  getValue(key: string) {
    return AsyncStorage.getItem(key);
  }

  removeValue(key: string) {
    return AsyncStorage.removeItem(key);
  }
}
