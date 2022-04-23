import User from './User';

export default interface Message {
  text: string;
  sender: User;
}
