import { Store, Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { Auth, Profile, User } from 'types';

declare module '@redux' {
  interface State {
    auth: Auth;
    profile: Profile;
    users: User[];
  }

  type AsyncActionCreator<T extends Action> = ActionCreator<
    ThunkAction<Promise<T>, State, AxiosInstance, T>
  >;

  type LoadData = ({ dispatch }: Store) => Promise<any>; // SSR Router data load helper
}
