/**Client side application */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider as ReduxProvider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import { store } from 'client/redux';
import { Routes } from 'client/Routes';

const App = (
  <HelmetProvider>
    <ReduxProvider store={store}>
      <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
    </ReduxProvider>
  </HelmetProvider>
);

ReactDOM.hydrate(App, document.getElementById('app'));
