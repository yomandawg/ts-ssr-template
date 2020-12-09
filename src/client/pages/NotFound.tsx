import React from 'react';
import { StaticRouterContext } from 'react-router';
import { Helmet } from 'react-helmet-async';

type NotFoundProps = {
  staticContext: StaticRouterContext;
};

const NotFound = ({ staticContext = {} }: NotFoundProps) => {
  staticContext.statusCode = 404;
  // TODO: check if CSR statusCode is possible (might be useful for SEO)

  const head = () => {
    return (
      <Helmet>
        <title>404 Not Found</title>
        <meta property="og:title" content="404 Not Found" />
      </Helmet>
    );
  };

  return (
    <div>
      {head()}
      <h1>404: Not Found</h1>
    </div>
  );
};

export default { component: NotFound };
