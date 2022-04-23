import axios from 'axios';
import Channel from '../types/Channel';

export const getChannel = (channelId: number): Promise<Channel> => {
  return axios.get<Channel>('').then((data) => {
    return data.data;
  });
};
