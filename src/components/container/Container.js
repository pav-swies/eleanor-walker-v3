import React from 'react';
import * as style from './container.module.css';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

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
