import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import { State, LoadData } from 'types/client/redux';
import { getBar } from 'client/actions';
import { withAuth } from 'client/components/hoc/withAuth';

// A 'Private' page template that requires authentication to acesss
const Private = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBar());
  }, [dispatch]);

  // state access
  const bar = useSelector((state: State) => state.bar);

  const renderBar = () => {
    return bar?.map((item) => {
      return <li key={item.id}>{item.name}</li>;
    });
  };

  // head(for SEO) attachment
  const head = () => {
    return (
      <Helmet>
        <title>Private Page</title>
        <meta property="og:title" content="Private Page" />
      </Helmet>
    );
  };

  return (
    <div>
      {head() /* head renderer */}
      <ul>{renderBar()}</ul>
    </div>
  );
};

// REQUIRED: server-side state generation helper function
const loadData: LoadData = function ({ dispatch }) {
  return dispatch(getBar());
};

export default {
  component: withAuth(Private), // withAuth HOC (require authentication)
  loadData,
};
