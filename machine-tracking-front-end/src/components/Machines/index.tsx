import React, { useEffect, useState } from 'react';

import { IMessageEvent, w3cwebsocket as W3CWebSocket } from 'websocket';

import Machine from './Machine';

import { Container } from './styles';

interface IMachines {
  id: string;
  name: string;
  status: string;
}

const client = new W3CWebSocket(process.env.REACT_APP_WEBSOCKET_URL || '');

const Machines: React.FC = () => {
  const [machines, setMachines] = useState<IMachines[]>([]);

  useEffect(() => {
    client.onmessage = (message: IMessageEvent) => {
      const mensagem = JSON.parse(message.data.toString());
      const type = mensagem.Type;

      if (type !== 'Status') {
        setMachines(mensagem.Message);
      }
    };

    client.onclose = () => {
      // eslint-disable-next-line no-console
      console.log('Connection closed');
    };
  }, [machines]);

  useEffect(() => {
    return function closeConnection() {
      client.close();
    };
  }, []);

  return (
    <Container>
      {machines.map(machine => (
        <Machine key={machine.id} name={machine.name} status={machine.status} />
      ))}
    </Container>
  );
};

export default Machines;
