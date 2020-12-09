import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import { State, LoadData } from 'types/client/redux';
import { Foo } from 'types/client/schema';
import { getFoo } from 'client/actions';

// An example page template
const Example = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoo());
  }, [dispatch]);

  // state access
  const foo = useSelector((state: State) => state.foo);

  const renderFoo = () => {
    return foo?.map((item) => {
      return <li key={item.id}>{item.name}</li>;
    });
  };

  // head(for SEO) attachment
  const head = () => {
    return (
      <Helmet>
        <title>Example Page</title>
        <meta property="og:title" content="Example Page" />
      </Helmet>
    );
  };

  return (
    <div>
      {head() /* head renderer */}
      <ul>{renderFoo()}</ul>
    </div>
  );
};

// REQUIRED: server-side state generation helper function
const loadData: LoadData = function ({ dispatch }) {
  return dispatch(getFoo());
};

export default {
  component: Example,
  loadData,
};
