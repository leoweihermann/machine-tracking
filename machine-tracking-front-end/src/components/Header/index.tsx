import React from 'react';

import { FaWrench } from 'react-icons/fa';

import { Container } from './styles';

const Component: React.FC = () => {
  return (
    <Container>
      <FaWrench size={24} color="#fff" />
      <h1>Machine Tracker</h1>
    </Container>
  );
};

export default Component;
