import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export const removeToken = async () => {
  if (Platform.OS == 'web') {
    localStorage.removeItem('token');
  } else if (Platform.OS == 'android' || Platform.OS == 'ios') {
    await SecureStore.deleteItemAsync('token');
  }
};

export const setToken = async (token: string) => {
  if (Platform.OS == 'web') {
    localStorage.setItem('token', token);
  } else if (Platform.OS == 'android' || Platform.OS == 'ios') {
    await SecureStore.setItemAsync('token', token);
  }
};
export const getToken = async (): Promise<string | null | undefined> => {
  let token = undefined;
  if (Platform.OS == 'web') {
    token = localStorage.getItem('token');
  } else if (Platform.OS == 'android' || Platform.OS == 'ios') {
    token = await SecureStore.getItemAsync('token');
  }
  return token;
};
