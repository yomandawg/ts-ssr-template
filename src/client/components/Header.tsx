import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAuth } from 'client/actions';
import { useAuth } from 'client/hooks';

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  const auth = useAuth();

  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <div>
      <Link to="/">Example</Link>
      <Link to="/private">Private</Link>
      {authButton}
      <Link to="/404">404</Link>
    </div>
  );
};

export default Header;
