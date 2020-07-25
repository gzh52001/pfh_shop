import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import back from './img/fanhui.png'
import car from './img/cart.png'
import { Affix } from 'antd'
import './topNav.scss'

/**
* 购物车的路由组件
*/
class TopNav extends Component {
    gocgsm = () => {
        this.props.history.push("/cgsm")
    }
    gogoodsxq = () => {
        this.props.history.push("/goodsxq")
    }
    gogwcjs = () => {
        this.props.history.push("/gwcjs")
    }
    goback = () => {
        this.props.history.goBack()
    }
    goxq = () => {
        this.props.history.push("/details")
    }
    render() {
        return (
            <Affix>
                <div className="topNav">
                    <ul className="clear">
                        <li className="back"><img src={back} onClick={this.goback} alt="" /></li>
                        <li onClick={this.goxq}>商品信息</li>
                        <li onClick={this.gogoodsxq}>商品详情</li>
                        <li onClick={this.gocgsm}>采购说明</li>
                        <li className="car" onClick={this.gogwcjs}><img src={car} alt="" /></li>
                    </ul>
                </div>
            </Affix>
        )
    }
}
TopNav = withRouter(TopNav)
export default TopNav 