import User from './User';

export default interface Message {
  id: string;
  text: string;
  sender: User;
}
