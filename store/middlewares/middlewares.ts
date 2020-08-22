import { globalError } from './globalError';
import { globalToken } from './globalToken';

export const middlewares = [
  globalError,
  globalToken,
];
