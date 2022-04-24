import User from './User';

export default interface Channel {
  id: string;
  name: string;
  avatarPath: string;
  owner: User;
  about: string;

  users: User[];
}
