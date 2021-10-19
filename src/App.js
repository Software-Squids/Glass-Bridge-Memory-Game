import React from 'react';
import logo from './logo.svg';
import './App.css';

import Bridge from './GlassBridge/Bridge';

function App() {
  // Default values (will relocate)
  const rows = 10;
  const cols = 2;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Bridge rows={rows} cols={cols}></Bridge>
      </header>
    </div>
  );
}

export default App;
