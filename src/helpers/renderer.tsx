import { Request } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import { Store } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript'; // serializer prevents XSS attacks
import { HelmetProvider, FilledContext, HelmetData } from 'react-helmet-async';

import { Routes } from 'client/Routes';

const template = (
  content: string,
  preloadedState: Store,
  { title, meta }: HelmetData
) => `
  <html>
    <head>
      ${title.toString()}
      ${meta.toString()}
    </head>
    <body>
      <div id="app">${content}</div>
      <script>
        window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
      </script>
      <script src="bundle.js"></script>
    </body>
  </html>
`;

export const renderer = (
  req: Request,
  store: Store,
  routerContext: StaticRouterContext
): string => {
  const helmetContext = {};

  const App = (
    <HelmetProvider context={helmetContext}>
      <ReduxProvider store={store}>
        <StaticRouter location={req.path} context={routerContext}>
          {renderRoutes(Routes)}
        </StaticRouter>
      </ReduxProvider>
    </HelmetProvider>
  );

  const content = renderToString(App);

  const preloadedState = store.getState() as Store;
  const { helmet } = helmetContext as FilledContext;

  return template(content, preloadedState, helmet);
};
