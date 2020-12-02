import { ActionType, UserAction } from '@actions';

export const authReducer = (state = null, action: UserAction) => {
  switch (action.type) {
    case ActionType.GET_CURRENT_USER:
      return action.payload || false;
    default:
      return state;
  }
};
