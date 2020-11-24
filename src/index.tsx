import 'babel-polyfill';
import express, { Request, Response } from 'express';
import { renderer, storeCreator } from 'helpers';
import { AsyncRouteConfig, matchRoutes } from 'react-router-config';
import { Routes } from '@utils';

export const app = express();

app.use(express.static('public'));

app.get('*', (req: Request, res: Response) => {
  const store = storeCreator();

  const routes = matchRoutes(Routes, req.path);

  const promises = routes.map(({ route }: { route: AsyncRouteConfig }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });

  // const content = renderer(req, store);

  // res.send(content);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT || 3000}`);
});
