import React, { Component } from 'react'
import TopNav from '../../components/TopNav/topNav'
import Lbt from '../../components/Lbt/lbt'
import GoodsTitle from '../../components/GoodsTitle/goodsTitle'
import Price from '../../components/Price/price'
import Specs from '../../components/Specs/specs'
import Shuju from '../../components/Shuju/shuju'
import CarBtn from '../../components/CarBtn/carBtn'
import './details.scss'
/**
 * 购物车的路由组件
 */
export default class Details extends Component {
    render() {
        return (
            <div className="details">
                <header className="details-header">
                    <TopNav />
                </header>
                <Lbt />
                <GoodsTitle />
                <Price />
                <Specs />
                <Shuju />
                <CarBtn />
            </div>
        )
    }
}