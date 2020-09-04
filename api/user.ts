import { User } from 'types/models/User';

import { client } from './client';

export const user = () => {
  type Req = User.Request.User;
  type Res = User.Response.User;
  return client.get<Req, Res>('/v1/user');
}
