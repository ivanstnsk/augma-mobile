import AsyncStorage from '@react-native-community/async-storage';
import * as Redux from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import { userReducer } from './user/userReducer';
import { questsReducer } from './quests/questsReducer';
import { globalErrorReducer } from './globalError/globalErrorReducer';
import { questReducer } from './quest/questReducer';
import { sessionReducer } from './session/sessionReducer';
import { tutorialsReducer } from './tutorials/tutorialsReducer';

import { middlewares } from './middlewares'

const questConfig = {
  key: 'quest',
  storage: AsyncStorage,
};

const tutorialsConfig = {
  key: 'tutorials',
  storage: AsyncStorage,
};

const rootReducer = Redux.combineReducers({
  user: userReducer,
  quests: questsReducer,
  globalError: globalErrorReducer,
  quest: persistReducer(questConfig, questReducer),
  session: sessionReducer,
  tutorials: persistReducer(tutorialsConfig, tutorialsReducer),
});

export type RootStore = ReturnType<typeof rootReducer>;

// @ts-ignore
// const composeEnhancers = Redux.compose;
// Uncomment to debug / comment to pass tests
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;

export const store = Redux.createStore(
  rootReducer,
  composeEnhancers(Redux.applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);
