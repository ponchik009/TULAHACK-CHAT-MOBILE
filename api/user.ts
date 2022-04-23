import axios from './axios';
import User from '../types/User';
import { getToken } from './token';

export const getUser = async (userId: number): Promise<User> => {
  return axios
    .get<User>('', {
      headers: {
        Authorization: 'Bearer ' + (await getToken()),
      },
    })
    .then((data) => {
      return data.data;
    });
};
