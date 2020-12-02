import { AsyncRouteConfig } from 'react-router-config';
import App from 'client/App';
import Home from '@pages/Home';
import UserList from '@pages/UserList';

// TODO check if using react-router Route works
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
    ...App,
    routes: [
      {
        path: '/',
        ...Home,
        exact: true,
      },
      {
        path: '/users',
        ...UserList,
      },
    ],
  },
];
