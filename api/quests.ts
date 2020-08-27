import { Pagination, Quest } from 'types';

import { client } from './client';

type QuestsRes = {
  items: Quest[];
};

export const getQuests = (params: Pagination) => {
  return client.get<Pagination, QuestsRes>('/v1/quests', { params });
}
