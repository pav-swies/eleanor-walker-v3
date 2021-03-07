import React from 'react';
import * as style from './container.module.css';
import Header from '../header/Header';

const Container = ({ children, location }) => {
  return (
    <div className={style.container}>
      <Header location={location} />
      {children}
    </div>
  );
};

export default Container;
