import { Bar } from 'types/client/schema';
import { BarAction } from 'types/client/actions';
import { ActionType } from 'client/actions';

const initialState: Bar = [];

export const barReducer = (state = initialState, action: BarAction) => {
  switch (action.type) {
    case ActionType.GET_BAR_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
