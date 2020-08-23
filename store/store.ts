import * as Redux from 'redux';

import { userReducer } from './user/userReducer';
import { globalErrorReducer } from './globalError/globalErrorReducer';

import { middlewares } from './middlewares'

const rootReducer = Redux.combineReducers({
  user: userReducer,
  globalError: globalErrorReducer,
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
