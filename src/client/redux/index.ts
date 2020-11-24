import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { userReducer } from '@redux/reducers';

export const reducers = combineReducers<State>({
  users: userReducer,
});

const enhancers = applyMiddleware(thunk);

// const preloadedState = (function () {
//   const state = (global as any).__PRELOADED_STATE__ as State;
//   delete (global as any).__PRELOADED_STATE__;
//   return state;
// })();
const preloadedState: State = { users: [] };

export const store = createStore(reducers, preloadedState, enhancers);
