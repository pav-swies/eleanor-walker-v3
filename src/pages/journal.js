import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container/Container';
import JournalLink from '../components/journal-link/JournalLink';

const JournalPage = ({ location, data }) => {
  const entries = data.allMarkdownRemark.edges;
  return (
    <Container location={location}>
      <h1>Journal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        laudantium.
      </p>
      <ul className="unstyled-list">
        {entries.map((entry) => (
          <JournalLink entry={entry.node} key={entry.node.id} />
        ))}
      </ul>
    </Container>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "journal" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            subtitle
            date(formatString: "Do MMMM YYYY")
            thumbnail {
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
          excerpt(pruneLength: 150)
        }
      }
    }
  }
`;

export default JournalPage;
