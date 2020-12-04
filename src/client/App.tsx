import React from 'react';
import { renderRoutes, AsyncRouteConfig } from 'react-router-config';

import Header from '@components/Header';
import { LoadData } from '@redux';
import { getAuth } from '@actions';

type AppProps = {
  route: AsyncRouteConfig;
};

const App = ({ route }: AppProps) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

const loadData: LoadData = function ({ dispatch }) {
  return dispatch(getAuth());
};

export default {
  component: App,
  loadData,
};
