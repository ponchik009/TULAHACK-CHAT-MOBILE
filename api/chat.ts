import axios from './axios';
import Chat from '../types/Chat';

export const getChat = (chatId: number): Promise<Chat> => {
  return axios.get<Chat>('api/chats').then((data) => {
    return data.data;
  });
};
