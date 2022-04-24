import axios from './axios';
import Chat, { ChatType } from '../types/Chat';
import { getToken } from './token';
import Message from '../types/Message';

export const getChatsInChannel = async (channelId: string): Promise<Chat[]> => {
  return axios
    .get<Chat[]>(`api/channels/${channelId}/chats`, {
      headers: {
        Authorization: 'Bearer ' + (await getToken()),
      },
    })
    .then((data) => data.data);
};
export const getPersonalChats = async (): Promise<Chat[]> => {
  return axios
    .get<Chat[]>(`api/chats/private`, {
      headers: {
        Authorization: 'Bearer ' + (await getToken()),
      },
    })
    .then((data) => data.data);
};

export const getMessagesInChat = async (chatId: string): Promise<Message[]> => {
  return axios
    .get<Message[]>('api/chats/' + chatId + '/messages', {
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
