import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Container from '../components/container/Container';

const IndexPage = ({ location }) => {
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
        placeholder="dominantColor"
        layout="constrained"
        width={768}
        aspectRatio={16 / 9}
      />
      <section>
        <h2>Latest Journal Entries</h2>
        <p>
          Some of my most recent thoughts. You can view all of them on the{' '}
          <Link to="/journal">journal page</Link>.
        </p>
      </section>
    </Container>
  );
};

export default IndexPage;
