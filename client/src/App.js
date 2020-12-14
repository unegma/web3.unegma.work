import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.scss';
import Menu from './components/Menu/Menu';
import HomePage from './pages/HomePage/HomePage';
import PageTwo from "./pages/PageTwo/PageTwo";
import PageThree from "./pages/PageThree/PageThree"

function App() {

  return (
    <div className="App">
      <Router>
        <Menu>Example App</Menu>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/page-two" component={PageTwo} />
          <Route exact path="/page-three" component={PageThree} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
