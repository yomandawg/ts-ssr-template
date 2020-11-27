import React from 'react';
import { renderRoutes, AsyncRouteConfig } from 'react-router-config';

import Header from '@components/Header';
import { LoadData } from '@redux';
import { getCurrentUser } from '@actions';

const App: React.FC<{ route: AsyncRouteConfig }> = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

const loadData: LoadData = function ({ dispatch }) {
  return dispatch(getCurrentUser());
};

export default {
  component: App,
  loadData,
} as AsyncRouteConfig;
