import React from 'react';
import { useAuth } from 'client/hooks';

// TODO update this to provider and context (using switch is an anti-pattern)
export const withAuth = (Children: React.ComponentType) => () => {
  const auth = useAuth();

  switch (auth) {
    case null:
      return <div>Loading...</div>;
    case false:
      return <div>Please log in to access private page</div>;
    default:
      return <Children />;
  }
};
