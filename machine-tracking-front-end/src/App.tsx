import React from 'react';

import Header from './components/Header';

import MachineTracker from './pages/MachineTracker';

import { GlobalStyle } from './styles/global';

const App: React.FC = () => (
  <>
    <Header />
    <MachineTracker />
    <GlobalStyle />
  </>
);

export default App;
