import React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Container from '../components/container/Container';
import JournalLink from '../components/journal-link/JournalLink';

const IndexPage = ({ location, data }) => {
  const entries = data.allMarkdownRemark.edges;
  return (
    <Container location={location}>
      <p>
        My name is Eleanor Walker sit amet consectetur adipisicing elit.
        Necessitatibus ratione odit earum eos architecto. Iste eum suscipit
        dolores atque quidem!
      </p>
      <StaticImage
        src="../images/home.jpg"
        alt="fabric"
        placeholder="blurred"
        layout="constrained"
        width={768}
        aspectRatio={16 / 9}
        formats={['auto', 'webp', 'avif']}
      />
      <section>
        <h2>Latest Journal Entries</h2>
        <p>
          Some of my most recent thoughts. You can view all of them on the{' '}
          <Link to="/journal">journal page</Link>.
        </p>
        <ul className="unstyled-list">
          {entries.map((entry) => (
            <JournalLink entry={entry.node} key={entry.node.id} />
          ))}
        </ul>
      </section>
    </Container>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
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

export default IndexPage;
