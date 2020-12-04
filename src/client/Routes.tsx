import { AsyncRouteConfig } from 'react-router-config';
import App from 'client/App';
import Home from '@pages/Home';
import Profile from '@pages/Profile';
import Users from '@pages/Users';
import NotFound from '@pages/NotFound';

// TODO check if using react-router Route works
// export const Routes = () => {
//   return (
//     <>
//       <Route exact path="/" component={Home} />
//       <Route path="/users" component={Users} />
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
        path: '/profile',
        ...Profile,
      },
      {
        path: '/users',
        ...Users,
      },
      {
        ...NotFound,
      },
    ],
  },
];
