import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';

import HomePage from './pages/HomePage/HomePage';
function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        {/*<Menus>*/}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Redirect to="/" />
          </Switch>
        {/*</Menus>*/}
      </Router>
    </div>
  );
}

export default App;
