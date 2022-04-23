import axios from './axios';

export const loginAuth = (login: string, password: string) => {
  return axios
    .post('login', {
      login,
      password,
    })
    .then((data) => {
      return data.data;
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
