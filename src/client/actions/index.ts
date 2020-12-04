import { Auth, Profile, User } from 'types';
import { UserAction, AuthAction } from '@actions';
import { AsyncActionCreator } from '@redux';

export enum ActionType {
  GET_AUTH,
  GET_AUTH_ERROR,
  GET_PROFILE,
  GET_PROFILE_ERROR,
  GET_USERS,
  GET_USERS_ERROR,
}

export const getAuth: AsyncActionCreator<AuthAction> = () => {
  return async (dispatch, getState, api) => {
    try {
      const res = await api.get<Auth>('/current_user');

      return dispatch({
        type: ActionType.GET_AUTH,
        payload: res.data,
      });
    } catch (e) {
      return { type: ActionType.GET_AUTH_ERROR };
    }
  };
};

export const getProfile: AsyncActionCreator<ProfileAction> = () => {
  return async (dispatch, getState, api) => {
    try {
      const res = await api.get<Profile>('/admins');

      return dispatch({
        type: ActionType.GET_PROFILE,
        payload: res.data,
      });
    } catch (e) {
      return { type: ActionType.GET_PROFILE_ERROR };
    }
  };
};

export const getUsers: AsyncActionCreator<UserAction> = () => {
  return async (dispatch, getState, api) => {
    try {
      const res = await api.get<User[]>('/users');

      return dispatch({
        type: ActionType.GET_USERS,
        payload: res.data,
      });
    } catch (e) {
      return { type: ActionType.GET_USERS_ERROR };
    }
  };
};
