import axios from 'axios';
import { ActionType, UserAction } from '@actions';
import { AsyncActionCreator } from '@redux';

const API_URL = 'https://react-ssr-api.herokuapp.com/users';

export const getUsers: AsyncActionCreator<UserAction> = () => {
  return async (dispatch) => {
    const res = await axios.get<User[]>(API_URL);

    return dispatch({
      type: ActionType.GET_USERS,
      payload: res.data,
    });
  };
};
