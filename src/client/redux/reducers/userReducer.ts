import { ActionType, User, UserAction } from '@actions';

export const userReducer = (state: User[] = [], action: UserAction) => {
  switch (action.type) {
    case ActionType.GET_USERS:
      return action.payload;
    default:
      return state;
  }
};
