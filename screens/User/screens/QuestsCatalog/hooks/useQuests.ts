import * as React from 'react';

import { Models } from 'types/models/models';
import { useLoader } from 'hooks/useLoader';
import * as QuestsAll from 'store/quests';

type QuestsHook = {
  quests: Models.Quests;
  refreshing: boolean;
  onRefresh: () => void;
}

export const useQuests = (): QuestsHook => {
  const [refreshing, setRefreshing] = React.useState(false);
  const Loader = useLoader();
  const Quests = QuestsAll.useQuests();
  const QuestsActions = QuestsAll.useQuestsActions();

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
      .quests(params)
      .finally(() => {
        Loader.hide();
        setRefreshing(false);
      });
  }, []);

  React.useEffect(() => {
    handleRefresh();
  }, []);

  return {
    quests: Quests,
    refreshing,
    onRefresh: handleRefresh,
  }
}
