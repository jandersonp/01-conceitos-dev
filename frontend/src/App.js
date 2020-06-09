import React from 'react';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="cabecalho 1">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="cabecalho 2">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header>
    </>
  );
}

export default App;