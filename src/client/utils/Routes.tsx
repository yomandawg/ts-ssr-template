// import React from 'react';
// import { Route } from 'react-router-dom';
import { AsyncRouteConfig } from 'react-router-config';

import { Home } from '@components/Home';
import { UserList, loadData } from '@components/UserList';

// export const Routes = () => {
//   return (
//     <>
//       <Route exact path="/" component={Home} />
//       <Route path="/users" component={UserList} />
//     </>
//   );
// };

export const Routes: AsyncRouteConfig[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/users',
    component: UserList,
    loadData,
  },
];
