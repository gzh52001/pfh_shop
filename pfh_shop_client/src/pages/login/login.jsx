import React, { Component } from "react"
import { HomeOutlined, UserOutlined, LockOutlined } from "@ant-design/icons"
import { withRouter } from 'react-router-dom'
import "./login1.css"
import "./login.css"

/**
 * 登陆的路由组件
 */
class Login extends Component {
  user_login = () => {
    // this.props.history.goBack() 
    console.log(111);
  }
  goreg = () => {
    this.props.history.push("/reg")
  }
  gohome = () => {
    this.props.history.push("/")
  }
  gologin=()=> {
    this.props.history.push("/login")
  }
  render() {
    return (
      <div className="login">
        <header
          data-am-widget="header"
          className="lkn-header am-header am-header-default am-no-layout"
        >
          <div className="am-header-left am-header-nav h49">
            <a onClick={this.gohome} className="h49">
              <HomeOutlined />
            </a>
          </div>
          <h1 className="am-header-title">
            <a href="javascript:">登录账户</a>
          </h1>
          <div className="am-header-right am-header-nav">
            <a onClick={this.goreg}
              className="go-register am-btn am-btn-primary pink"
            >
              <span className="am-header-nav-title">注册</span>
            </a>
          </div>
        </header>

        <form id="userloginform" method="post">
          <div className="am-container">
            <div className="am-input-group mt25">
              <span className="am-input-group-label">
                <UserOutlined />
              </span>
              <input
                type="text"
                name="Phone"
                className="am-form-field"
                placeholder="用户名"
              />
            </div>
            <div for="Phone" className="you-state"></div>
            <div className="am-input-group">
              <span className="am-input-group-label">
                <LockOutlined />
              </span>
              <input
                type="password"
                name="Passwd"
                className="am-form-field"
                placeholder="密码"
              />
            </div>
            <div for="Passwd" className="you-state"></div>

            <div className="am-cf login-remember-forget">
              <div className="am-fl">
                <label  className="reg-label">
                  <input
                    type="checkbox"
                    id="MemeryPassword"
                    name="MemeryPassword"
                    data-am-ucheck=""
                    className="am-ucheck-checkbox"
                  />
                  记住密码
                </label>
              </div>
              <a
                onClick={this.gologin}
                className="am-btn am-btn-link am-fr"
              >
                忘记密码
              </a>
            </div>
            <a
              // "user_login()"
              onClick={this.gologin}
              className="am-btn am-btn-primary pink am-btn-block mt20"
            >
              登入
            </a>
          </div>
        </form>
      </div>
    );
  }
}
Login = withRouter(Login)
export default Login