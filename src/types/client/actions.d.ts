import { Action } from 'redux';
import { Auth, User, Profile } from 'types';
import { ActionType } from '@actions';

declare module '@actions' {
  interface GetUsersAction extends Action<ActionType.GET_USERS> {
    payload: User[];
  }
  type UserAction = GetUsersAction | Action<ActionType.GET_USERS_ERROR>;

  interface GetProfileAction extends Action<ActionType.GET_PROFILE> {
    payload: Profile;
  }
  type ProfileAction = GetProfileAction | Action<ActionType.GET_PROFILE_ERROR>;

  interface GetAuthAction extends Action<ActionType.GET_AUTH> {
    payload: Auth;
  }
  type AuthAction = GetAuthAction | Action<ActionType.GET_AUTH_ERROR>;
}
