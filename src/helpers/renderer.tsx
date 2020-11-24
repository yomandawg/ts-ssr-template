import { Request } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import { Routes } from '@utils/Routes';

export const renderer = (req: Request, store: Store): string => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  // const preloadedState = store.getState();
  // return `
  //   <html>
  //     <head></head>
  //     <body>
  //       <div id="root">${content}</div>
  //       <script>
  //         __PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
  //           /</g,
  //           '\\u003c'
  //         )}
  //       </script>
  //       <script src="bundle.js"></script>
  //     </body>
  //   </html>
  // `;
};
