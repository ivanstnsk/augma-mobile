export type UserType =
| 'user'
| 'anon';

export type UserCredentials = {
  username: string;
  password: string;
}

export type UserInfo = {
  name: string;
};
