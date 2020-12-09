import { Store, Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { Auth, Foo, Bar } from 'types/client/schema';

import { Dispatch } from 'redux';

export interface State {
  auth?: Auth;
  foo?: Foo;
  bar?: Bar;
}

export type ThunkActionCreator<T extends Action> = ActionCreator<
  ThunkAction<Promise<T>, State, AxiosInstance, T>
>;

// TODO: find correct way to describe LoadData
// SSR Router data load (server-side state generation) helper
export type LoadData = ({ dispatch }: Store) => Promise<T>;
