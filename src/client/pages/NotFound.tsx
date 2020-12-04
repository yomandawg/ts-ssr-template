import React from 'react';
import { StaticRouterContext } from 'react-router';

type NotFoundProps = {
  staticContext: StaticRouterContext;
};

const NotFound = ({ staticContext = {} }: NotFoundProps) => {
  staticContext.statusCode = 404;
  // TODO: check if CSR statusCode is possible (might be useful for SEO)

  return <h1>404: Not Found</h1>;
};

export default { component: NotFound };
