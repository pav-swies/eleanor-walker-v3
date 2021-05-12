import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as style from './work-link.module.css';

const WorkLink = ({ entry }) => {
  const thumbnail = getImage(entry.frontmatter.thumbnail);
  return (
    <li>
      <article>
        <div>
          <Link to={entry.fields.slug} className="faux-link"></Link>
          <GatsbyImage image={thumbnail} alt="" />
        </div>
        <div>
          <h2>
            <Link to={entry.fields.slug}>{entry.frontmatter.title}</Link>
          </h2>
        </div>
      </article>
    </li>
  );
};

export default WorkLink;
