import 'babel-polyfill';
import express, { Request, Response } from 'express';
import proxy from 'express-http-proxy';
import { renderer, storeCreator } from 'helpers';
import { AsyncRouteConfig, matchRoutes } from 'react-router-config';
import { Routes } from '@utils';

export const app = express();

// TODO: setup proxy middleware for possible authentication
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(proxyReqOpts) {
      if (proxyReqOpts.headers) {
        proxyReqOpts.headers['x-forwarded-host'] = 'localhost:3000';
      }
      return proxyReqOpts;
    },
  })
);
app.use(express.static('public'));

app.get('*', (req: Request, res: Response) => {
  const store = storeCreator(req);

  const routes = matchRoutes(Routes, req.path);

  const promises = routes.map(({ route }: { route: AsyncRouteConfig }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT || 3000}`);
});
