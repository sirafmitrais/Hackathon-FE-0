import React from 'react';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import TransporterPage from './views/transporter';

import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/">
            <TransporterPage/>
            {/* <Login/> */}
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
