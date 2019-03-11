import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
// 登录验证（是否携带token） 高阶组件(接收一个组件，返回一个新的组件)
class AuthCheck extends React.Component {

  render() {
    const { component: Component, path } = this.props
    // 验证是否登录过，如果没有跳转到登录页面
    let isLogin = sessionStorage.getItem('mytoken')?true:false;
    return (
      <Route path={path} render={()=> {
        let info = <Component/>
        if(!isLogin) {
          // 没有登录，跳转到登录页面
          info = <Redirect to='/' />
        }
        return info
      }}></Route>
    )
  }
}
export default AuthCheck;