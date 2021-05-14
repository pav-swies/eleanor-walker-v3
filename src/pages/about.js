import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Container from '../components/container/Container';

const JournalPage = ({ location }) => {
  return (
    <Container location={location}>
      <h1>About me</h1>
      <div className="about-header">
        <StaticImage
          className="about-header-image"
          src="../images/home.jpg"
          alt="Eleanor Sofia Walker"
          placeholder="blurred"
          layout="constrained"
          width={900}
          aspectRatio={3 / 4}
          formats={['auto', 'webp', 'avif']}
        />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, corporis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, impedit voluptatum. Error aliquam corrupti provident dolores tempora commodi aperiam. Atque sed quaerat vel maiores reiciendis quas nihil consequuntur voluptatibus nulla!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, impedit voluptatum. Error aliquam corrupti provident dolores tempora commodi aperiam. Atque sed quaerat vel maiores reiciendis quas nihil consequuntur voluptatibus nulla!</p>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, impedit voluptatum. Error aliquam corrupti provident dolores tempora commodi aperiam. Atque sed quaerat vel maiores reiciendis quas nihil consequuntur voluptatibus nulla!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, impedit voluptatum. Error aliquam corrupti provident dolores tempora commodi aperiam. Atque sed quaerat vel maiores reiciendis quas nihil consequuntur voluptatibus nulla!</p>
    </Container>
  );
};

export default JournalPage;
