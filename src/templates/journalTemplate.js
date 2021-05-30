import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Container from '../components/container/Container';
import Seo from '../components/seo/Seo';

const JournalTemplate = ({ location, data }) => {
  const journal = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  const banner = getImage(journal.thumbnail);
  return (
    <Container location={location}>
      <Seo title={journal.title} description={journal.subtitle} image={banner} article={true} />
      <article className="journal-wrapper">
        <Link className="return-link" to="/journal">
          Back to journal
        </Link>
        <GatsbyImage image={banner} alt="" />
        <h1>{journal.title}</h1>
        <p className="journal-subtitle">{journal.subtitle}</p>
        <p>{journal.date}</p>
        <div
          className="content-wrapper"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Container>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 150)
      frontmatter {
        subtitle
        title
        date(formatString: "Do MMMM YYYY")
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              aspectRatio: 1.7
            )
          }
        }
      }
    }
  }
`;

export default JournalTemplate;
