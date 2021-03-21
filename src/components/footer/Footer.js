import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import * as style from './footer.module.css';

const Footer = ({ location }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const rootPath = location.pathname === `${__PATH_PREFIX__}/`;

  const footerLogoText = `${
    data.site.siteMetadata.title
  } ©${new Date().getFullYear()}`;

  let footerLogo;

  if (rootPath) {
    footerLogo = <p className={style.footerLogo}>{footerLogoText}</p>;
  } else {
    footerLogo = (
      <Link to="/" className={style.footerLogo}>
        {footerLogoText}
      </Link>
    );
  }
  return (
    <footer className={style.footer}>
      {footerLogo}
      <button onClick={scrollToTop} className={style.footerScrollTop}>
        Back to top
      </button>
    </footer>
  );
};

export default Footer;
