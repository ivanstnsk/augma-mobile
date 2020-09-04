import { Session } from 'types/models/Session';

import { client } from './client';

export const login = (params: Session.Request.Login) => {
  type Req = Session.Request.Login;
  type Res = Session.Response.Login;
  return client.post<Req, Res>('/v1/login', params);
}

export const registration = (params: Session.Request.Registration) => {
  type Req = Session.Request.Registration;
  type Res = Session.Response.Registration;
  return client.post<Req, Res>('/v1/registration', params);
}

export const logout = () => {
  return client.get('/v1/logout');
}
