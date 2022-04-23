import axios from './axios';
import * as SecureStore from 'expo-secure-store';

export const loginAuth = (login: string, password: string) => {
  return axios
    .post('login', {
      login,
      password,
    })
    .then((data) => {
      return data.data;
    })
    .then(async (token) => {
      await SecureStore.setItemAsync('token', token);
      localStorage.setItem('token', token);
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
