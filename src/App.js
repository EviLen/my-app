import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
// 当入样式
import 'semantic-ui-css/semantic.min.css'
import AuthCheck from './auth'
import Login from './login'
import Main from './module/main'




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          {/* <Route path="/home" component={Main}></Route> */}
          <AuthCheck path="/home" component={Main}></AuthCheck>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
