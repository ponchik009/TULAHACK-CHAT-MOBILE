enum ChatType {
  PRIVATE,
  PUBLIC,
  CHANEL,
}

export default interface Chat {
  name: string;
  chatType: ChatType;
  avatarPath: string;
}
