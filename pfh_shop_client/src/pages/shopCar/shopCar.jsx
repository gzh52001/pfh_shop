import React, { Component } from 'react'
import kong  from './images/emptycart.jpg'
import './shopCar.scss'
import TarBar from '../../components/TarBar/tarBar'
import TopBar from '../../components/TopBar/topBar'
/**
 * 购物车的路由组件
 */
export default class ShopCar extends Component {
    render() {
        return (
            <div className="shopCar">
               <TopBar />
                <section>
                <a href="/"><img src={kong} alt="啥也没有" className='login-kong'/></a>
                </section>
            <TarBar />
            </div>
        )
    }
}