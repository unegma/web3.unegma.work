import React from 'react';
import './Menu.scss';
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from '@material-ui/core';

function Menus(props: any): JSX.Element {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/users/candidates" className="nav-link">{props.children}</Link>
      </Toolbar>
    </AppBar>
  );
}

export default Menus;
