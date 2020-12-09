import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import { State } from 'types/client/redux';
import { authReducer, fooReducer, barReducer } from 'client/redux/reducers';

// TODO: find correct pattern to use combineReducers<State>
export const reducers = combineReducers({
  auth: authReducer,
  foo: fooReducer,
  bar: barReducer,
});

// customized Axios on client-side
const axiosInstance = axios.create({
  baseURL: '/api',
});

const enhancers = applyMiddleware(thunk.withExtraArgument(axiosInstance));

// use for client-side preloaded state
const preloadedState = (function () {
  const state = (global as any).__PRELOADED_STATE__ as State;
  delete (global as any).__PRELOADED_STATE__;
  return state;
})();

export const store = createStore(reducers, preloadedState, enhancers);
