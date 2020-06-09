import React, { useState } from 'react';

import './App.css';
import backgroundImage  from './assets/background.png';

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

      <img width={300} src={backgroundImage} alt="Foto"/>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
       
       <button type="button" onClick={handleAddProject}>Adicionar projeto</button>

   
    </>
  );
}

export default App;