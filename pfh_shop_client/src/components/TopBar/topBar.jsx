import React, { Component } from 'react'
import logo from './img/logo2.png'
import search from './img/search2.png'
import './topBar.css'
/**
 * 购物车的路由组件
 */
export default class TopBar extends Component {
    render() {
        return (
            <div className="topBar">
                <header className="topBar-header">
                    <ul>
                        <li className="logo"><a href="/"><img src={logo} alt="logo" className='topBar-logo'/></a></li>
                        <li className="search"><a href="/"><img src={search} alt="" className='topBar-search'/></a></li>
                    </ul>
                </header>
            </div>
        )
    }
}