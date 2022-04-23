import axios from 'axios';
import Chat from '../types/Chat';
import { IChat } from '../types/entities';

export const getChat = (chatId: number): Promise<Chat> => {
  return axios.get<Chat>('').then((data) => {
    return data.data;
  });
};
