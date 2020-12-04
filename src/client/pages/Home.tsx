import React from 'react';

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <button onClick={() => console.log('test')}>Click</button>
    </div>
  );
};

export default { component: Home };
