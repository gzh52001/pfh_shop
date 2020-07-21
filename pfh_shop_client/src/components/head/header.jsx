import React, { Component } from 'react'
import Logo from './images/logo2.png'
import Logo_se from './images/search2.png'
import "./header.scss"
// import NavApp from "../nav/nav"
// import { Affix } from 'antd'

export default class Head extends Component {
    render() {
        return (
            <div className="affix">
                    <header className="logo_home">
                        <img className="logo" src={Logo} alt="你愁啥？" />
                        <img className="logo_se" src={Logo_se} alt="你再瞅？" />
                    </header>
                    {/* <NavApp /> */}
                
            </div>


        )
    }
}
