import React from 'react'
// 导入相关组件
import { Icon, Form, Button, Divider } from 'semantic-ui-react'
import './login.css'

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-logo">
          <Icon name="home" size="massive" color="orange" />
        </div>
        <div className="login-form">
          <Form>
            <Form.Input
              icon="user"
              required
              size="big"
              iconPosition="left"
              name="username"
              placeholder="请输入用户名..."
            />
            <Form.Input
              icon="user"
              required
              size="big"
              iconPosition="left"
              name="username"
              placeholder="请输入用户名..."
            />
            <Button fluid color="green">登录</Button>
          </Form>
          <Divider horizontal>----</Divider>
        </div>
        <div className='login-third'>
        <Icon name="home" size="huge" color="black" />
        <Icon name="home" size="huge" color="black" />
        </div>
      </div>
    )
  }
}
export default Login
