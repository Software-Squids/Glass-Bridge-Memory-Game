import React, { useState } from 'react';
import './App.css';
import { GlassBridge } from './pages/GlassBridge'
import { Scoreboard } from './pages/Scoreboard/Scoreboard'

function App() {
  // would make a useState
  const [activePage, setActivePage] = useState("scoreboard")


  const getActivePage = (page) => {
    switch(page) {
      case "scoreboard":
        return <Scoreboard />
      case "glass-bridge":
        return <GlassBridge />
      default:
        return <>Page Not Found</>
    }
  }

  const toggleScoreboard = () => setActivePage("scoreboard");

  const toggleGlassBridge = () => setActivePage("glass-bridge");
  

  return (
    <div className="App">
      <nav className="navbar">
        <button onClick={toggleScoreboard}>Scoreboard</button>
        <button onClick={toggleGlassBridge}>Glass Bridge</button>
      </nav>
      {getActivePage(activePage)}
    </div>
  );
}

export default App;
