import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as style from './journal-link.module.css';

const JournalLink = ({ entry }) => {
  const thumbnail = getImage(entry.frontmatter.thumbnail);
  return (
    <li className={style.journalLink}>
      <article className={style.journalLinkWrapper}>
        <div className={style.journalLinkImage}>
          <Link to={entry.fields.slug} className="faux-link">
            <span>{entry.frontmatter.title}</span>
          </Link>
          <GatsbyImage image={thumbnail} alt="" />
        </div>
        <div className={style.journalLinkContent}>
          <h2>
            <Link to={entry.fields.slug}>{entry.frontmatter.title}</Link>
          </h2>
          <p className={style.journalLinkSubtitle}>
            {entry.frontmatter.subtitle}
          </p>
          <p className={style.journalLinkDate}>{entry.frontmatter.date}</p>
          <p>{entry.excerpt}</p>
        </div>
      </article>
    </li>
  );
};

export default JournalLink;
