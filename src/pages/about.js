import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Container from '../components/container/Container';

const JournalPage = ({ location }) => {
  return (
    <Container location={location}>
      <h1>About me</h1>
      <div className="about-header">
        <div className="about-header-image-wrapper">
          <StaticImage
            className="about-header-image"
            src="../images/about-image.jpg"
            alt="Eleanor Sofia Walker"
            placeholder="blurred"
            layout="constrained"
            width={600}
            aspectRatio={3 / 4}
            formats={['auto', 'webp', 'avif']}
            quality="100"
          />
        </div>
        <div className="about-header-content">
          <p>Eleanor Walker Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, corporis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, impedit voluptatum. Error aliquam corrupti provident dolores tempora commodi aperiam. Atque sed quaerat vel maiores reiciendis quas nihil consequuntur voluptatibus nulla!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, impedit voluptatum. Error aliquam corrupti provident dolores tempora commodi aperiam. Atque sed quaerat vel maiores reiciendis quas nihil consequuntur voluptatibus nulla!</p>
        </div>
      </div>
      <h2>A heading</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, impedit voluptatum. Error aliquam corrupti provident dolores tempora commodi aperiam. Atque sed quaerat vel maiores reiciendis quas nihil consequuntur voluptatibus nulla!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, impedit voluptatum. Error aliquam corrupti provident dolores tempora commodi aperiam. Atque sed quaerat vel maiores reiciendis quas nihil consequuntur voluptatibus nulla!</p>
    </Container>
  );
};

export default JournalPage;
