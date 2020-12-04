import { AxiosInstance, AxiosError } from 'axios';

type Dummy = boolean;

interface State {
  dummy: Dummy
}

interface IActionCreator<A> {
  (...args: any[]): A;
}

interface IAction<T, P = undefined> {
  readonly type: T;
  readonly payload?: P;
}

type IAsyncAction<T, P = undefined> = (
  dispatch: Promise<IAction<T, P>>,
  getState: any,
  api: AxiosInstance
) => Promise<IAction<T, P>>;

enum ACTION {
  GET_DUMMY,
  GET_DUMMY_S,
  GET_DUMMY_E,
}

type GetDummyAction = IAsyncAction<
  ACTION.GET_DUMMY | ACTION.GET_DUMMY_S | ACTION.GET_DUMMY_E,
  Dummy
>;

const getDummy: IActionCreator<GetDummyAction> = (dispatch: Dispatch) => {
  dispatch({ type: ACTION.GET_DUMMY });

  return async (dispatch, getState, api) => {
    if (getState.)
    try {
      const res = await api.get<Dummy>('/dummy');

      return dispatch({
        type: ACTION.GET_DUMMY_S,
        payload: res.data,
      });
    } catch (e: AxiosError) {
      return dispatch({
        type: ACTION.GET_DUMMY_E,
        payload: e.code
      });
    }
  };
}
