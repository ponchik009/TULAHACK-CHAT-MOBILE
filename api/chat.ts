import axios from './axios';
import Chat from '../types/Chat';
import { getToken } from './token';

export const getChat = async (chatId: number): Promise<Chat> => {
  return axios
    .get<Chat>('api/chats', {
      headers: {
        Authorization: 'Bearer ' + (await getToken()),
      },
    })
    .then((data) => {
      return data.data;
    });
};
