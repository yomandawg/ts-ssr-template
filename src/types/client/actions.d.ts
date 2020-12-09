import { Action } from 'redux';
import { Auth, Foo, Bar } from 'types/client/schema';
import { ActionType } from 'client/actions';

export interface GetAuthAction
  extends Action<
    ActionType.GET_AUTH | ActionType.GET_AUTH_SUCCESS | ActionType.GET_AUTH_FAIL
  > {
  payload?: Auth;
}
export type AuthAction = GetAuthAction; // | ...

export interface GetFooAction
  extends Action<
    ActionType.GET_FOO | ActionType.GET_FOO_SUCCESS | ActionType.GET_FOO_FAIL
  > {
  payload?: Foo;
}
export type FooAction = GetFooAction; // | ...

export interface GetBarAction
  extends Action<
    ActionType.GET_BAR | ActionType.GET_BAR_SUCCESS | ActionType.GET_BAR_FAIL
  > {
  payload?: Bar;
}
export type BarAction = GetBarAction; // | ...
