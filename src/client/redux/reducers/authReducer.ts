import { Auth } from 'types/client/schema';
import { AuthAction } from 'types/client/actions';
import { ActionType } from 'client/actions';

const initialState: Auth | null = null;

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case ActionType.GET_AUTH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
