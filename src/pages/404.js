import React from 'react';
import Container from '../components/container/Container';

const NotFoundPage = ({ location }) => {
  return <Container location={location}>404! Page not found</Container>;
};

export default NotFoundPage;
