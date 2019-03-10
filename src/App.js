import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './App.css';

import Login from './login'
import Main from './module/main'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/home" component={Main}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
