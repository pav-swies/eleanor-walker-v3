import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as style from './work-link.module.css';

const WorkLink = ({ entry }) => {
  const featuredImage = getImage(entry.frontmatter.featuredImage);
  return (
    <li>
      <article className={style.workLinkWrapper}>
        <div className={style.workLinkImage}>
          <Link to={entry.fields.slug} className="faux-link"></Link>
          <GatsbyImage image={featuredImage} alt="" />
        </div>
        <div className={style.workLinkContent}>
          <h2>
            <Link to={entry.fields.slug}>{entry.frontmatter.title}</Link>
          </h2>
        </div>
      </article>
    </li>
  );
};

export default WorkLink;
