import { Store, Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { User } from '@actions';
import { AxiosInstance } from 'axios';

declare module '@redux' {
  interface State {
    auth: User | undefined;
    users: User[];
  }

  type AsyncActionCreator<T extends Action> = ActionCreator<
    ThunkAction<Promise<T>, State, AxiosInstance, T>
  >;

  type LoadData = ({ dispatch }: Store) => Promise<any>; // SSR Router data load helper
}
