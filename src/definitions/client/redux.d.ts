import { User } from '@actions';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

declare module '@redux' {
  interface State {
    users: User[];
  }

  type AsyncActionCreator<T extends Action> = ActionCreator<
    ThunkAction<Promise<T>, State, unknown, T>
  >;
}
