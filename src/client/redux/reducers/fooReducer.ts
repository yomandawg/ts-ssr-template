import { Foo } from 'types/client/schema';
import { FooAction } from 'types/client/actions';
import { ActionType } from 'client/actions';

const initialState: Foo = [];

export const fooReducer = (state = initialState, action: FooAction) => {
  switch (action.type) {
    case ActionType.GET_FOO_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
