import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import * as style from './footer.module.css';

const Footer = () => {
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

  return (
    <footer className={style.footer}>
      <Link to="/" className={style.footerLogo}>
        {data.site.siteMetadata.title} ©{new Date().getFullYear()}
      </Link>
      <button onClick={scrollToTop} className={style.footerScrollTop}>
        Back to top
      </button>
    </footer>
  );
};

export default Footer;
