import React from 'react';
import { GLobalStyle } from './style/global';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <GLobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
