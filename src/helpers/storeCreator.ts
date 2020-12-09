import { Request } from 'express';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import { State } from 'types/client/redux';
import { reducers } from 'client/redux';

export const storeCreator = (req: Request) => {
  let preloadedState: State = {};

  // customized Axios for BFF with cookie-forwarding
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com', // IMPORTANT: this API server is restricted for testing only
    headers: { cookie: req.get('cookie') || '' },
  });

  const enhancers = applyMiddleware(thunk.withExtraArgument(axiosInstance));

  const store = createStore(reducers, preloadedState, enhancers);

  return store;
};
