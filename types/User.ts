export default interface User {
  id: string;
  about: string;
  login: string;
  avatar: {
    path: string;
  };
  name: string;
}
