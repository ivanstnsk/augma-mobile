import { UserCredentials } from 'types';

import { client } from './client';

type AuthRes = {
  token: string;
};

export const login = (data: UserCredentials) => {
  return client.post<UserCredentials, AuthRes>('/v1/login', data);
}

export const registration = (data: UserCredentials) => {
  return client.post<UserCredentials, AuthRes>('/v1/registration', data);
}

export const logout = () => {
  return client.delete('/v1/session');
}