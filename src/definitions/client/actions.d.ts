import { Action } from 'redux';
import { ActionType } from '@actions';

declare module '@actions/user' {
  interface User {
    id: number;
    name: string;
  }

  interface GetUsersAction extends Action<ActionType.GET_USERS> {
    payload: User[];
  }

  type UserAction = GetUsersAction | Action<ActionType.GET_USERS_ERROR>;
}
