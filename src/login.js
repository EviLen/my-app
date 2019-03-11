import React from 'react'
import axios from 'axios'
// 导入相关组件
import { Icon, Form, Button, Divider } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import './login.css'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  handleUsername = (event) => {
    this.setState({
      username:event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      password:event.target.value
    })
  }
  submit = async () => {
    // 保存token信息到sessionstorage中
    let ret = await axios.post('http://47.96.21.88:8086/users/login', {
      uname:this.state.username,
      pwd:this.state.password
    })
    // console.log(ret)
    // 存储token信息到sessionstorage中
    sessionStorage.setItem('mytoken',ret.data.data.token);
    // 跳转到主页
    let { history } = this.props;
    history.push('/home')
  }
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
              value={this.state.username}
              onChange={this.handleUsername}
              placeholder="请输入用户名..."
            />
            <Form.Input
              icon="user"
              required
              size="big"
              iconPosition="left"
              name="username"
              value={this.state.paaword}
              onChange={this.handlePassword}
              placeholder="请输入用户名..."
            />
            <Button onClick={this.submit} fluid color="green">
              登录
            </Button>
          </Form>
          <Divider horizontal>----</Divider>
        </div>
        <div className="login-third">
          <Icon name="rocketchat" size="huge" color="black" />
          <Icon name="qq" size="huge" color="black" />
        </div>
      </div>
    )
  }
}
export default withRouter(Login);
