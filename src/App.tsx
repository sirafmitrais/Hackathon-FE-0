import React from 'react';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import TransporterPage from './views/transporter';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/">
            <TransporterPage/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
