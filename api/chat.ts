import axios from './axios';
import Chat, { ChatType } from '../types/Chat';
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

export const createChat = async (name: string, chatType: any): Promise<Chat> => {
  return axios
    .post<Chat>(
      'api/chats',
      {
        name,
        chatType,
      },
      {
        headers: {
          Authorization: 'Bearer ' + (await getToken()),
        },
      },
    )
    .then((data) => {
      return data.data;
    });
};
