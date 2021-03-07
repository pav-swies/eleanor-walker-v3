import React from 'react';
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

  const { title, shortTitle } = data.site.siteMetadata;
  const rootPath = location.pathname === `${__PATH_PREFIX__}/`;

  let headerStyle;
  let headerLogo;

  if (rootPath) {
    headerStyle = style.headerLarge;
    headerLogo = <h1 className={style.headerLargeTitle}>{title}</h1>;
  } else {
    headerStyle = style.headerCompact;
    headerLogo = (
      <Link className={style.headerTitle} to="/">
        {shortTitle}
      </Link>
    );
  }

  return (
    <header className={headerStyle}>
      {headerLogo}
      <nav>
        <ul className={style.headerNavList}>
          {navLinks.map((link, index) => (
            <li className={style.headerNavItem} key={index}>
              <Link className={style.headerNavLink} to={link.url}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
