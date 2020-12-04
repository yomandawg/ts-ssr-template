import { ActionType, AuthAction } from '@actions';

export const authReducer = (state = {}, action: AuthAction) => {
  switch (action.type) {
    case ActionType.GET_AUTH:
      return action.payload;
    default:
      return state;
  }
};
