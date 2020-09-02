import { UserCredentials } from 'types';

import { UserInfo } from 'types';

import { client } from './client';

export type AuthRes = {
  token: string;
};

export type UserRes = {
  info: UserInfo;
  doneTutorial: boolean;
}

export const login = (data: UserCredentials) => {
  return client.post<UserCredentials, AuthRes>('/v1/login', data);
}

export const registration = (data: UserCredentials) => {
  return client.post<UserCredentials, AuthRes>('/v1/registration', data);
}

export const logout = () => {
  return client.delete('/v1/session');
}

export const user = () => {
  return client.get<{}, UserRes>('/v1/user');
}
