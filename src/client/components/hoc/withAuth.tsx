import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from 'client/hooks';

// TODO update this to provider and context (anti-pattern)
export const withAuth = (Children: React.ComponentType) => () => {
  const auth = useAuth();

  switch (auth) {
    case null:
      return <div>Loading...</div>; // FIXME enable loading component
    case false:
      return <Redirect to="/" />;
    default:
      return <Children />;
  }
};
