import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
// 导入组件库的样式
import 'semantic-ui-css/semantic.min.css'
// 导入外界字体图标
import './assets/fonts/iconfont.css';

import AuthCheck from './auth';
import Login from './login';
import Main from './module/main';

import { baseURL } from './common';
import axios from 'axios';
// axios的基准路径配置
axios.defaults.baseURL = baseURL;
// 统一处理接口的token（axios请求拦截器）
axios.interceptors.request.use(function (config) {
  if(!config.url.endsWith('/')){
    config.headers.Authorization = sessionStorage.getItem('mytoken');
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
// axios响应拦截器
axios.interceptors.response.use(function (response) {
  // response是axios包装之后的数据
  return response.data;
}, function (error) {
  return Promise.reject(error);
});


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
