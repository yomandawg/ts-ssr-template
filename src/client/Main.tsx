import React from 'react';
import { renderRoutes, AsyncRouteConfig } from 'react-router-config';

import { LoadData } from 'types/client/redux';
import Header from 'client/components/Header';
import { getAuth } from 'client/actions';

// The main component for custom routes
const Main = ({ route }: { route: AsyncRouteConfig }) => {
  return (
    <>
      <Header />
      {renderRoutes(route.routes)}
    </>
  );
};

const loadData: LoadData = function ({ dispatch }) {
  return dispatch(getAuth());
};

export default {
  component: Main,
  loadData,
};
