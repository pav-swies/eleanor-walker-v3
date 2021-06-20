import React from 'react';
import Container from 'components/container/Container';
import Seo from 'components/seo/Seo';

const ThankYouPage = ({ location }) => {
  return (
    <Container location={location}>
      <Seo title="Thank you" />
      Thank you for your message, I will be back in touch soon.
    </Container>
  );
};

export default ThankYouPage;
