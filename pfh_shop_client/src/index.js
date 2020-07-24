/**
 * 入口js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import 'antd-mobile/dist/antd-mobile.css'
import App from "./App"
import "./src.scss"
//将APP组件渲染到index页面的div上
ReactDOM.render(<App />, document.getElementById('root'))
