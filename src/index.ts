import 'babel-polyfill';
import express, { Request, Response } from 'express';
import proxy from 'express-http-proxy';
import { renderer, storeCreator } from 'helpers';
import { StaticRouterContext } from 'react-router';
import { AsyncRouteConfig, matchRoutes } from 'react-router-config';
import { Routes } from 'client/Routes';

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

  const promises = routes
    .map(({ route }: { route: AsyncRouteConfig }) => {
      return route.loadData ? route.loadData(store) : null;
    }) // use wrapper promise for no-error-handling action creators
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          // promise that always resolves
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context: StaticRouterContext = {};
    const content = renderer(req, store, context);

    // handle http codes
    if (context.url) {
      return res.redirect(301, context.url); // redirect
    }
    if (context.statusCode === 404) {
      return res.status(404).send(content); // not found
    }

    res.send(content);
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT || 3000}`);
});
