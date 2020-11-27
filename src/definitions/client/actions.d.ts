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

  interface GetCurrentUserAction extends Action<ActionType.GET_CURRENT_USER> {
    payload: User;
  }

  /**add any new actions */

  type UserAction =
    | GetUsersAction
    | GetCurrentUserAction
    | Action<ActionType.GET_USERS_ERROR>;
}
