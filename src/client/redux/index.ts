import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import { authReducer, profileReducer, userReducer } from '@redux/reducers';

export const reducers = combineReducers<State>({
  auth: authReducer,
  profile: profileReducer,
  users: userReducer,
});

const axiosInstance = axios.create({
  baseURL: '/api',
});

const enhancers = applyMiddleware(thunk.withExtraArgument(axiosInstance));

const preloadedState = (function () {
  const state = (global as any).__PRELOADED_STATE__ as State;
  delete (global as any).__PRELOADED_STATE__;
  return state;
})();

export const store = createStore(reducers, preloadedState, enhancers);
