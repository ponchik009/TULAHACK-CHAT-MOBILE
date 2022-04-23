import axios from 'axios';
import User from '../types/User';

export const getUser = (userId: number): Promise<User> => {
  return axios.get<User>('').then((data) => {
    return data.data;
  });
};
