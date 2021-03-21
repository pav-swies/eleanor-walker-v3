import React from 'react';
import * as style from './container.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Container = ({ children, location }) => {
  const rootPath = location.pathname === `${__PATH_PREFIX__}/`;

  let mainStyle;

  if (rootPath) {
    mainStyle = style.main;
  } else {
    mainStyle = style.mainMargin;
  }

  return (
    <div className={style.container}>
      <Header location={location} />
      <main className={mainStyle}>{children}</main>
      <Footer location={location} />
    </div>
  );
};

export default Container;
