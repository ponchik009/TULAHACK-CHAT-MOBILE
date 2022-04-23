import axios from './axios';
import * as SecureStore from 'expo-secure-store';
import User from '../types/User';
import { Platform } from 'react-native';

interface UserAuth extends User {
  token: string;
}

export const loginAuth = (login: string, password: string): Promise<User> => {
  return axios
    .post<UserAuth>('/api/login', {
      login,
      password,
    })
    .then((data) => {
      return data.data;
    })
    .then(async (userAuth) => {
      console.log(userAuth);
      if (Platform.OS == 'web') {
        localStorage.setItem('token', userAuth.token);
      } else if (Platform.OS == 'android' || Platform.OS == 'ios') {
        await SecureStore.setItemAsync('token', userAuth.token);
      }
      return userAuth;
    });
};

export const logout = () => {
  return axios.get('').then((data) => {
    return data.data;
  });
};

export const register = () => {
  return axios.get('').then((data) => {
    return data.data;
  });
};
