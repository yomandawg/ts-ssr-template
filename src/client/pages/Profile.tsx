import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State, LoadData } from '@redux';
import { getProfile } from '@actions';
import { withAuth } from '@components/hoc/withAuth';

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const profile = useSelector((state: State) => state.profile);

  const renderProfile = () => {
    return profile.map((user: { id: number; name: string }) => {
      return <li key={user.id}>{user.name}</li>;
    });
  };

  return (
    <div>
      list of admins
      <ul>{renderProfile()}</ul>
    </div>
  );
};

const loadData: LoadData = function ({ dispatch }) {
  return dispatch(getProfile());
};

export default {
  component: withAuth(Profile),
  loadData,
};
