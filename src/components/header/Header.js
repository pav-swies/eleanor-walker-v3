import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import * as style from './header.module.css';

const Header = ({ location }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          shortTitle
        }
      }
    }
  `);

  const navLinks = [
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Journal',
      url: '/journal',
    },
    {
      name: 'Work',
      url: '/work',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
  ];

  const { title } = data.site.siteMetadata;
  const rootPath = location.pathname === `${__PATH_PREFIX__}/`;

  let headerLogo;

  if (rootPath) {
    headerLogo = (
      <h1 className={style.headerTitle}>
        <Link to="/">
          {title}
        </Link>
      </h1>
    );
  } else {
    headerLogo = (
      <Link className={style.headerTitle} to="/">
        {title}
      </Link>
    );
  }

  const [nav, setNav] = useState(0);

  return (
    <header className={`${style.header} ${nav === 1 ? style.headerOpen : ''}`}>
      <div className={style.headerInner}>
        {headerLogo}
        <nav
          className={`${style.headerNav} ${
            nav === 1 ? style.headerNavOpen : ''
          }`}
        >
          <ul className={style.headerNavList}>
            {navLinks.map((link, index) => (
              <li className={style.headerNavItem} key={index}>
                <Link
                  className={style.headerNavLink}
                  to={link.url}
                  onClick={() => setNav(0)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className={style.headerButton}
          onClick={() => setNav(nav === 0 ? 1 : 0)}
        >
          Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
