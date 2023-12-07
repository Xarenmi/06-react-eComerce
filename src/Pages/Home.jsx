import React from 'react';
import dancingJesus from '../../public/Dancing-Jesus-resize.gif'

const Home = () => {
  return (
    <div className='home'>
     <img src={dancingJesus} alt="Dancing Jesus" />
    </div>
  );
};

export default Home;