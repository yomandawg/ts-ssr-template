import { Profile } from 'types';
import { ActionType, ProfileAction } from '@actions';

export const profileReducer = (state: Profile = [], action: ProfileAction) => {
  switch (action.type) {
    case ActionType.GET_PROFILE:
      return action.payload;
    default:
      return state;
  }
};
