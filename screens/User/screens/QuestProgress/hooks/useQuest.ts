import * as React from 'react';

import { Models } from 'types/models/models';
import { useLoader } from 'hooks/useLoader';
import * as QuestAll from 'store/quest';

type QuestPointsHook = {
  points: Models.QuestPoints;
  info?: Models.QuestInfo;
  refreshing: boolean;
  onRefresh: () => void;
}

export const useQuest = (questId: string): QuestPointsHook => {
  const [refreshing, setRefreshing] = React.useState(false);
  const Loader = useLoader();
  const Quest = QuestAll.useQuest();
  const QuestsActions = QuestAll.useQuestActions();

  const handleRefresh = React.useCallback(async () => {
    Loader.show();
    setRefreshing(true);

    const params = {
      pagination: {
        offset: 0,
        limit: 50,
      },
    };

    try {
      await QuestsActions.questInfo(questId, {});
      await QuestsActions.questPoints(questId, params);
    } finally {
      Loader.hide();
      setRefreshing(false);
    }
  }, []);

  React.useEffect(() => {
    handleRefresh();
  }, []);

  return {
    points: Quest.points,
    info: Quest.info,
    refreshing,
    onRefresh: handleRefresh,
  }
}
