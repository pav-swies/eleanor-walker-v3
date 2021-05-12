import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Container from '../components/container/Container';

const JournalPage = ({ location, data }) => {
  return (
    <Container location={location}>
      <h1>About me</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, corporis?</p>
      <StaticImage
        src="../images/home.jpg"
        alt="fabric"
        placeholder="blurred"
        layout="constrained"
        width={900}
        aspectRatio={16 / 9}
        formats={['auto', 'webp', 'avif']}
      />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, impedit voluptatum. Error aliquam corrupti provident dolores tempora commodi aperiam. Atque sed quaerat vel maiores reiciendis quas nihil consequuntur voluptatibus nulla!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, impedit voluptatum. Error aliquam corrupti provident dolores tempora commodi aperiam. Atque sed quaerat vel maiores reiciendis quas nihil consequuntur voluptatibus nulla!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, impedit voluptatum. Error aliquam corrupti provident dolores tempora commodi aperiam. Atque sed quaerat vel maiores reiciendis quas nihil consequuntur voluptatibus nulla!</p>
    </Container>
  );
};

export default JournalPage;
