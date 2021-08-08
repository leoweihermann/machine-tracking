import styled from 'styled-components';

interface IMachineProps {
  status: string;
}

export const Container = styled.div<IMachineProps>`
  color: #fff;
  padding: 2rem;

  background: ${props =>
    props.status === 'Parada'
      ? '#ff5858'
      : props.status === 'Em manutenção'
      ? '#ffcc58'
      : '#58ff8b'};

  border-radius: 8px;
  height: 206px;
`;
