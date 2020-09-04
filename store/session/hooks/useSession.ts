import { useSelector } from 'react-redux';

import { RootStore } from 'store';
import { SessionStore } from '../sessionReducer';

type SessionHook = SessionStore;

export const useSession = (): SessionHook => {
  const session = useSelector<RootStore, SessionStore>((state) => state.session);

  return session;
}
