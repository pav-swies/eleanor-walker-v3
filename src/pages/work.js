import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container/Container';
import WorkLink from '../components/work-link/WorkLink';
import Seo from '../components/seo/Seo';

const WorkPage = ({ location, data }) => {
  const entries = data.allMarkdownRemark.edges;

  return (
    <Container location={location}>
      <Seo title="Work" />
      <h1>Work</h1>
      <ul className="grid-list unstyled-list">
        {entries.map((entry) => (
          <WorkLink entry={entry.node} key={entry.node.id} />
        ))}
      </ul>
    </Container>
  );
};

export default WorkPage;

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "work" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  aspectRatio: 1
                )
              }
            }
            title
            type
          }
        }
      }
    }
  }
`;
