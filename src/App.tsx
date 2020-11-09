import React from 'react';
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

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Menu>CRUD App</Menu>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/page-two" component={PageTwo} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
