import React, { Component } from 'react'
import './topNav.scss'
import back from './img/fanhui.png'
import car from './img/cart.png'
/**
 * 购物车的路由组件
 */
export default class TopNav extends Component {
    render() {
        return (
            <div className="topNav">
                   <ul className="clear">
                       <li className="back"><img src={back} alt=""/></li>
                       <li>商品信息</li>
                       <li>商品详情</li>
                       <li>采购说明</li>
                       <li className="car"><img src={car} alt=""/></li>
                   </ul>
            </div>
        )
    }
}