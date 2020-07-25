import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import { LeftOutlined } from "@ant-design/icons";

import "./reg.css";
// import "./login.css"
/**
 * 登陆的路由组件
 */
class Reg extends Component {
  goreg = () => {
    this.props.history.push("/reg")
  }
  render() {
    return (
      <div className="reg">
        <header
          data-am-widget="header"
          className="lkn-header am-header am-header-default am-no-layout"
        >
          <div className="am-header-left am-header-nav h49">
            <a href="javascript:history.go(-1)" className="h49">
              <LeftOutlined />
            </a>
          </div>
          <h1 className="am-header-title">
            <a href="javascript:">注册账户</a>
          </h1>
        </header>

        <div className="am-container">
          <div className="am-g mt25">
            <div className="am-u-sm-centered">
              <form id="registerform" method="post">
                <input id="layerIndex" type="hidden" value="0" />
                <input type="hidden" name="UIMark" value="register" />
                <div className="am-form">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    maxlength="11"
                    placeholder="手机号（唯一用户名）"
                  />
                  <div for="phone" id="forphone" className="you-state"></div>
                  <input
                    type="password"
                    id="passwd"
                    name="passwd"
                    maxlength="20"
                    placeholder="设置密码（6-20位字符）"
                  />
                  <div for="passwd" className="you-state"></div>
                  <input
                    type="password"
                    id="compasswd"
                    name="compasswd"
                    maxlength="20"
                    placeholder="确认密码"
                  />
                  <div for="compasswd" className="you-state"></div>

                  <div for="verificationcode" className="you-state"></div>
                  <div className="register-rules">
                    <label className="reg-label">
                      <input
                        id="agree"
                        type="checkbox"
                        checked="checked"
                        data-am-ucheck=""
                        className="am-ucheck-checkbox"
                      />
                      <span className="am-ucheck-icons">
                        <i className="am-icon-unchecked"></i>
                        <i className="am-icon-checked"></i>
                      </span>
                      我已阅读并同意
                      <a href="#" data-am-modal="{target: '#doc-modal-1'}">
                        《PFHOO平台用户注册协议》
                      </a>
                    </label>
                  </div>
                  <a
                    onClick={this.goreg}
                    className="am-btn am-btn-primary am-btn-block pink mt20"
                  >
                    注册
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Reg = withRouter(Reg)
export default Reg