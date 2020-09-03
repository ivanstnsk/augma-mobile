import * as Redux from 'redux';

import { userReducer } from './user/userReducer';
import { preferencesReducer } from './preferences/preferencesReducer';
import { questsReducer } from './quests/questsReducer';
import { globalErrorReducer } from './globalError/globalErrorReducer';
import { questReducer } from './quest/questReducer';

import { middlewares } from './middlewares'

const rootReducer = Redux.combineReducers({
  user: userReducer,
  preferences: preferencesReducer,
  quests: questsReducer,
  globalError: globalErrorReducer,
  quest: questReducer,
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
