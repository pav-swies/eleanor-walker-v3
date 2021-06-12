import React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Container from '../components/container/Container';
import JournalLink from '../components/journal-link/JournalLink';
import Seo from '../components/seo/Seo';

const IndexPage = ({ location, data }) => {
  const entries = data.allMarkdownRemark.edges;
  return (
    <Container location={location}>
      <Seo title="Home" />
      <section>
        <div className="hero-intro">
          <p>
            I’m Eleanor, a curious handweaver & textile artist. I create
            handwoven pieces for the home, always made with natural materials
            and designed to feel good.
          </p>
          <p>
            Contact me <Link to="/contact">here</Link> about commissions, or
            find me on{' '}
            <a
              href="https://www.instagram.com/eleanorsofia_/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            .
          </p>
        </div>
        <StaticImage
          className="hero-image"
          src="../images/home.jpg"
          alt="fabric"
          placeholder="blurred"
          layout="constrained"
          width={1000}
          aspectRatio={16 / 9}
          formats={['auto', 'webp', 'avif']}
          quality="100"
        />
        <p className="hero-image-caption">Mindful Spring Blanket</p>
      </section>
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "journal" } } }
      limit: 2
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

export default IndexPage;
