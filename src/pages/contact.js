import React from 'react';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';

const ContactPage = ({ location, data }) => {
  return (
    <Container location={location}>
      <Seo title="Contact" />
      <h1>Contact</h1>
      <p>
        You can find me on instagram{' '}
        <a
          href="https://www.instagram.com/eleanorsofia_/"
          target="_blank"
          rel="noreferrer"
        >
          @eleanorsofia_
        </a>
      </p>
      <p>
        Or if you'd like to get in touch about anything, please use the form
        below leaving your email address if you’d like me to write back.
      </p>
      <ContactForm />
    </Container>
  );
};

export default ContactPage;
