import axios from './axios';
import Channel from '../types/Channel';
import { getToken } from './token';

export const getChannels = async (): Promise<Channel[]> => {
  return axios
    .get<Channel[]>('/api/channels', {
      headers: {
        Authorization: 'Bearer ' + (await getToken()),
      },
    })
    .then((data) => {
      return data.data;
    });
};

export const getChannel = async (channelId: number): Promise<Channel> => {
  return axios
    .get<Channel>('', {
      headers: {
        Authorization: 'Bearer ' + (await getToken()),
      },
    })
    .then((data) => {
      return data.data;
    });
};

export const createChannel = async (name: string, about: string, file: any) => {
  return axios
    .post<Channel>(
      '/api/channels',
      { name, about, file },
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

export const findChannel = async (searchName: string): Promise<Channel[]> => {
  return axios.get<Channel[]>('/api/channel/search/' + searchName).then((data) => data.data);
};
