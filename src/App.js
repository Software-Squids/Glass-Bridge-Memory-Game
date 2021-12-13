import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import './App.css';

import { GlassBridge } from './pages/GlassBridge/';
import { HomePage } from './pages/Home/';
import { Help } from './pages/Help/';
import { HighScores } from './pages/HighScores/';
import { highscoresState } from './states/highscores';

const MAX_HIGHSCORES = 10

function App() {
  const setHighscores = useSetRecoilState(highscoresState)

  const getHighscores = () => {
    fetch("https://glass-bridge.herokuapp.com/api/v1/scoreboard")
      .then(res => res.json())
      .then(scores => {
        console.log('scores data:', scores)
        // sort highscores
        scores.data.sort((a, b) => b[0] - a[0])
        console.log('scores sorted:', scores.data)
        // trim highscores
        let trimmedHighscores = scores.data.slice(0, MAX_HIGHSCORES)
        setHighscores(trimmedHighscores)
      })
      .catch(err => {
          console.log('scores error:', err)
          // throw new Error("Could not get highscores")
      })
  }

  useEffect(() => {
    getHighscores()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/Play">
            <GlassBridge/>
          </Route>
          <Route path="/Helper">
            <Help/>
          </Route>
          <Route path="/Scores">
            <HighScores/>
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
