import React from 'react';
import Container from '../components/container/Container';
import ContactForm from '../components/contact-form/ContactForm';

const ContactPage = ({ location, data }) => {
  return (
    <Container location={location}>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        laudantium.
      </p>
      <ContactForm />
    </Container>
  );
};

export default ContactPage;
