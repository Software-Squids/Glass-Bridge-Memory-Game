import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { GlassBridge } from './pages/GlassBridge/';
import { HomePage } from './pages/Home/';
import { Help } from './pages/Help/';
import { HighScoresPage as HighScores } from './pages/HighScores/HighScoresPage';

export const MAX_HIGHSCORES = 10
export const difficulties = ["easy", "medium", "hard"]

function App() {

  return (
    <div className="App">
      <main className="app-main">
        <Switch>
          <Route path="/Play">
            <GlassBridge/>
          </Route>
          <Route path="/Helper">
            <Help/>
          </Route>
          <Route path="/Scores">
            <HighScores />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
