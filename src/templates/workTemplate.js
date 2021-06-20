import React from 'react';
import { Link, graphql } from 'gatsby';
import Container from '../components/Container';
import Seo from '../components/Seo';

const WorkTemplate = ({ location, data }) => {
  const work = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;

  return (
    <Container location={location}>
      <Seo title={work.title} article={true} />
      <article className="work-wrapper">
        <header>
          <Link className="return-link" to="/work">
            Back to work
          </Link>
          <h1>{work.title}</h1>
        </header>
        <div
          className="work-content-wrapper"
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

export default WorkTemplate;
