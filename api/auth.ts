import axios from 'axios';

export const login = () => {
  return axios.get('').then((data) => {
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
