import React from 'react';
import * as style from './container.module.css';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Container = ({ children, location }) => {
  return (
    <div className={style.container}>
      <Header location={location} />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Container;
