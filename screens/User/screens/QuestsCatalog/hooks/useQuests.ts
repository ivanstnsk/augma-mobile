import * as React from 'react';

import { useLoader } from 'hooks/useLoader';
import * as QuestsAll from 'store/quests';
import { Quest } from 'types';

type QuestsHook = {
  items: Quest[];
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
    QuestsActions
      .getQuests({ offset: 0, limit: 50 })
      .finally(() => {
        Loader.hide();
        setRefreshing(false);
      });
  }, []);

  React.useEffect(() => {
    Loader.show();
    QuestsActions
      .getQuests({ offset: 0, limit: 50 })
      .finally(Loader.hide);
  }, []);

  return {
    items: Quests.items,
    refreshing,
    onRefresh: handleRefresh,
  }
}
