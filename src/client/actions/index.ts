import { Auth, Foo, Bar } from 'types/client/schema';
import {
  GetAuthAction,
  GetFooAction,
  GetBarAction,
} from 'types/client/actions';
import { ThunkActionCreator } from 'types/client/redux';

// Example Action Types
export enum ActionType {
  GET_AUTH,
  GET_AUTH_SUCCESS,
  GET_AUTH_FAIL,
  GET_FOO,
  GET_FOO_SUCCESS,
  GET_FOO_FAIL,
  /**Bar data, keep-in-mind, is for auth-approved use */
  GET_BAR,
  GET_BAR_SUCCESS,
  GET_BAR_FAIL,
}

// TODO change Thunk to Saga

// Example Auth-related action
export const getAuth: ThunkActionCreator<GetAuthAction> = () => {
  return async (dispatch, getState, api) => {
    try {
      const res = await api.get<Auth>('/current_user'); // IMPORTANT: /current_user endpoint is restricted for testing only

      return dispatch({
        type: ActionType.GET_AUTH_SUCCESS,
        payload: Object.assign({}, res.data),
      });
    } catch (e) {
      return dispatch({ type: ActionType.GET_AUTH_FAIL });
    }
  };
};

// Example async action creator
export const getFoo: ThunkActionCreator<GetFooAction> = () => {
  return async (dispatch, getState, api) => {
    try {
      const res = await api.get<Foo>('/users'); // IMPORTANT: /users endpoint is restricted for testing only

      return dispatch({
        type: ActionType.GET_FOO_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      return dispatch({ type: ActionType.GET_FOO_FAIL });
    }
  };
};

// Example async action creator which will require authentication to create
export const getBar: ThunkActionCreator<GetBarAction> = () => {
  return async (dispatch, getState, api) => {
    try {
      const res = await api.get<Bar>('/admins'); // IMPORTANT: /admins endpoint is restricted for testing only

      return dispatch({
        type: ActionType.GET_BAR_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      return { type: ActionType.GET_BAR_FAIL };
    }
  };
};
