export enum GlobalErrorAction {
  GLOBAL_ERROR_PUT = 'GLOBAL_ERROR_PUT',
  GLOBAL_ERROR_REMOVE = 'GLOBAL_ERROR_REMOVE'
}

export const actionGlobalErrorPut = (error: any) => {
  return {
    type: GlobalErrorAction.GLOBAL_ERROR_PUT,
    payload: error,
  };
};

export const actionGlobalErrorRemove = () => {
  return {
    type: GlobalErrorAction.GLOBAL_ERROR_REMOVE,
    payload: {},
  };
};
