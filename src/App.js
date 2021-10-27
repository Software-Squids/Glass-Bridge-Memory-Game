import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { GlassBridge } from './pages/GlassBridge/';
import { HomePage } from './pages/Home/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/Play">
            <GlassBridge />
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
