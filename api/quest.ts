import { Quests } from 'types/models/Quests';

import { client } from './client';

export const questInfo = (questId: string, params: Quests.Request.QuestInfo) => {
  type Req = Quests.Request.QuestInfo;
  type Res = Quests.Response.QuestInfo;
  return client.get<Req, Res>(`/v1/quest/${questId}/info`, { params });
}

export const questPoints = (questId: string, params: Quests.Request.QuestPoints) => {
  type Req = Quests.Request.QuestPoints;
  type Res = Quests.Response.QuestPoints;
  return client.get<Req, Res>(`/v1/quest/${questId}/points`, { params });
}
