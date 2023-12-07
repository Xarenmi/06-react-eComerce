import React from 'react';
import { Header, Footer } from '@/Components';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;