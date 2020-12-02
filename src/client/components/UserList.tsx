import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { State, LoadData } from '@redux';
import { User, getUsers } from '@actions';

export const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector((state: State) => state.users);

  const renderUsers = () => {
    return users.map((user: User) => {
      return <li key={user.id}>{user.name}</li>;
    });
  };

  return (
    <div>
      list of users
      <ul>{renderUsers()}</ul>
    </div>
  );
};

export const loadData: LoadData = function (store) {
  return store.dispatch(getUsers());
};
