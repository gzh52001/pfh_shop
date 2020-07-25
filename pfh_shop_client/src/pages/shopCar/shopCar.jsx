import React, { Component } from 'react'
import kong  from './images/emptycart.jpg'
// import { Affix } from 'antd';
// import TarBar from '../../components/TarBar/tarBar'
import Head from '../../components/head/header'
import Foot from "../../components/foot/foot"
import './shopCar.scss'
/**
 * 购物车的路由组件
 */
export default class ShopCar extends Component {
    render() {
        return (
            <div className="shopCar">
               <Head />
                <section>
                <a><img src={kong} alt="啥也没有" className='login-kong'/></a>
                </section>
                <Foot />
            </div>
            
        )
    }
}