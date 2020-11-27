import { ActionType, UserAction } from '@actions';
import { AsyncActionCreator } from '@redux';

export const getUsers: AsyncActionCreator<UserAction> = () => {
  return async (dispatch, getState, axiosToApi) => {
    const res = await axiosToApi.get<User[]>('/users');

    return dispatch({
      type: ActionType.GET_USERS,
      payload: res.data,
    });
  };
};

export const getCurrentUser: AsyncActionCreator<UserAction> = () => {
  return async (dispatch, getState, axiosToApi) => {
    const res = await axiosToApi.get<User>('/current_user');

    return dispatch({
      type: ActionType.GET_CURRENT_USER,
      payload: res.data,
    });
  };
};
