import User from './User';

export default interface Channel {
  name: string;
  avatarPath: string;
  owner: User;
  about: string;

  users: User[];
}
