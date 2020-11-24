import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { State, reducers } from '@redux';

export const storeCreator = () => {
  let preloadedState: State = { users: [] };

  const enhancers = applyMiddleware(thunk);

  const store = createStore(reducers, preloadedState, enhancers);

  return store;
};
