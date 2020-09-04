import { Quests } from 'types/models/Quests';

import { client } from './client';

export const quests = (params: Quests.Request.Quests) => {
  type Req = Quests.Request.Quests;
  type Res = Quests.Response.Quests;
  return client.get<Req, Res>('/v1/quests', { params });
}
