import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Container from 'components/Container';
import Seo from 'components/Seo';

const JournalPage = ({ location }) => {
  return (
    <Container location={location}>
      <Seo title="About" />
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
          <p>Hello, I’m Eleanor and I am a handweaver.</p>
          <p>
            I spent 3 years at university learning to weave and I now own a
            small table loom and a large floor loom where I create my own woven
            textiles.
          </p>
          <p>
            For me, weaving is a never-ending journey where craft, storytelling
            and the senses come together.
          </p>
          <p>
            I like to explore each of these through what I create. By making
            hand woven pieces for the home, I hope to bring comfort and beauty
            to everyday life.
          </p>
          <p>
            As a person I am curious and present, a passionate learner finding
            joy in the small things.
          </p>
        </div>
      </div>
      <h2>About my work</h2>
      <p>
        Everything I weave is made using natural fibres and materials, like soft
        cotton, fluffy merino wool, nubbly silk noil and more. This is important
        to me because of their power to reconnect us to the natural world, and
        because too much around us today is synthetic. I believe this connection
        we have with nature can improve our wellbeing and I like to incorporate
        this philosophy into my textiles.
      </p>
      <p>
        Nature is what inspires me the most, with her colours and diversity,
        intricacies and simplicity, eternal growth, and perfect imperfections.
        But I also find ideas and inspiration in people, experiences, and
        feelings; sometimes a colour or pattern choice can just be an intuitive
        decision.
      </p>
    </Container>
  );
};

export default JournalPage;
