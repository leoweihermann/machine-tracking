import React from 'react';

import { Container } from './styles';

interface IMachineProps {
  name: string;
  status: string;
}

const Machine: React.FC<IMachineProps> = ({ name, status }: IMachineProps) => {
  return (
    <Container status={status}>
      <h1>{name}</h1>
      <span>Status: {status}</span>
    </Container>
  );
};

export default Machine;
