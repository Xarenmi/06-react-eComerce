import React from 'react';
import dancingJesus from '../../public/Dancing-Jesus-resize.gif'

const Home = () => {
  return (
    <main>
      <h1>HOME SECTION</h1>
      <h2>ON DEVELOPMENT</h2>
      <img src={dancingJesus} alt="Dancing Jesus" />
    </main>
  );
};

export default Home;