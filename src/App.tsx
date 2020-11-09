import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import Menu from './components/Menu/Menu';

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Menu>CRUD App</Menu>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
