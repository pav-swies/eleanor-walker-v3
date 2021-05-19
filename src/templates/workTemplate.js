import React from 'react';
import { Link, graphql } from 'gatsby';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Container from '../components/container/Container';

const JournalTemplate = ({ location, data }) => {
  // const journal = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  // const banner = getImage(journal.thumbnail);
  return (
    <Container location={location}>
      <article>
        <Link className="return-link" to="/work">Back to work</Link>
        {/* <GatsbyImage image={banner} alt="" />
        <h1>{journal.title}</h1> */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
              width: 900
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
