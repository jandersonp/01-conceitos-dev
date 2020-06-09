import React, { useState } from 'react';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['node.js', 'react.js']);

  function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`);
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="cabecalho 1" />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
       
       <button type="button" onClick={handleAddProject}>Adicionar projeto</button>

   
    </>
  );
}

export default App;