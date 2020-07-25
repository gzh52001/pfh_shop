import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Logo from './images/logo2.png'
import Logo_se from './images/search2.png'
import "./header.scss"
// import NavApp from "../nav/nav"
// import { Affix } from 'antd'

class Head extends Component {
    tiaozhuan = () => {
        this.props.history.push('/seek')
    }
    render() {
        return (
            <div className="affix">
                <header className="logo_home">
                    <img className="logo" src={Logo} alt="你愁啥？" />
                    <img className="logo_se" src={Logo_se} alt="你再瞅？" onClick={this.tiaozhuan} />
                </header>
                {/* <NavApp /> */}

            </div>

        )
    }
}
Head = withRouter(Head)
export default Head
