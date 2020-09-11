import * as React from 'react';

import { Models } from 'types/models/models';
import { useLoader } from 'hooks/useLoader';
import * as QuestAll from 'store/quest';

type QuestPointsHook = {
  questPoints: Models.QuestPoints;
  refreshing: boolean;
  onRefresh: () => void;
}

export const useQuestPoints = (questId: string): QuestPointsHook => {
  const [refreshing, setRefreshing] = React.useState(false);
  const Loader = useLoader();
  const QuestPoints = QuestAll.useQuestPoints();
  const QuestsActions = QuestAll.useQuestActions();

  const handleRefresh = React.useCallback(() => {
    Loader.show();
    setRefreshing(true);

    const params = {
      pagination: {
        offset: 0,
        limit: 50,
      },
    };

    QuestsActions
      .questPoints(questId, params)
      .finally(() => {
        Loader.hide();
        setRefreshing(false);
      });
  }, []);

  React.useEffect(() => {
    handleRefresh();
  }, []);

  return {
    questPoints: QuestPoints,
    refreshing,
    onRefresh: handleRefresh,
  }
}
