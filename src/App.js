import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './App.css';

function Login() {
  return <div>Login</div>
}
function Main() {
  return <div>Main</div>
}

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
