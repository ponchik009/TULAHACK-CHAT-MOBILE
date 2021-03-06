import axios from './axios';
import * as SecureStore from 'expo-secure-store';
import User from '../types/User';
import { Platform } from 'react-native';
import { removeToken, setToken } from './token';

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
      setToken(userAuth.token);
      return userAuth;
    });
};

export const logout = () => {
  return axios.get('').then((data) => {
    removeToken();
    return data.data;
  });
};

export const register = (
  login: string,
  username: string,
  aboutMe: string,
  password: string,
  confirmPassword: string,
): Promise<User> => {
  return axios
    .post<UserAuth>('/api/register', {
      login,
      name: username,
      about: aboutMe,
      password,
      //confirmPassword,
    })
    .then((data) => {
      return data.data;
    })
    .then(async (userAuth) => {
      setToken(userAuth.token);
      return userAuth;
    });
};
