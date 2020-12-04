import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State, LoadData } from '@redux';
import { getAuth } from '@actions';

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  const auth = useSelector((state: State) => state.auth);

  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/profile">Profile</Link>
      {authButton}
    </>
  );
};

export default Header;
