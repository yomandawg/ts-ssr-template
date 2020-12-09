import { AsyncRouteConfig } from 'react-router-config';
import Main from 'client/Main';
import Example from 'client/pages/Example';
import Private from 'client/pages/Private';
import NotFound from 'client/pages/NotFound';

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
    ...Main,
    routes: [
      {
        path: '/',
        exact: true,
        ...Example,
      },
      {
        path: '/private',
        ...Private,
      },
      {
        ...NotFound,
      },
    ],
  },
];
