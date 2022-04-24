export enum ChatType {
  PRIVATE,
  PUBLIC,
  CHANEL,
}

export default interface Chat {
  id: string;
  name: string;
  chatType: ChatType;
  avatarPath: string;
}
