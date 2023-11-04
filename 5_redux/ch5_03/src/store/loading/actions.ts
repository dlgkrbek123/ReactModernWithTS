import { Dispatch } from 'redux';
import type * as T from './types';

export const setLoading = (payload: T.State): T.SetLoadingAction => ({
  type: '@loading/setLoadingAction',
  payload,
});

export const doTimedLoading =
  (duration: number = 3 * 1000) =>
  (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const timerId = setTimeout(() => {
      clearTimeout(timerId);
      dispatch(setLoading(false));
    }, duration);
  };
