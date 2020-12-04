import { Request } from 'express';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { State, reducers } from '@redux';

export const storeCreator = (req: Request) => {
  let preloadedState: State = { auth: null, profile: [], users: [] };

  // cookie-forward
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' },
  });

  const enhancers = applyMiddleware(thunk.withExtraArgument(axiosInstance));

  const store = createStore(reducers, preloadedState, enhancers);

  return store;
};
