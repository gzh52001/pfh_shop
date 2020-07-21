import React, {Component} from 'react'
import home from '../../assets/home.png'
import fenlei from '../../assets/fenlei.png'
import car from '../../assets/car.png'
import my from '../../assets/my.png'
import './tarBar.css'

export default class TarBar extends Component {
    render(){
        return(
            <div className='tar-bar'>
                <ul>
                    <li><span><img src={home} alt="giao"/></span><span>首页</span></li>
                    <li><span><img src={fenlei} alt="giao"/></span><span>分类</span></li>
                    <li><span><img src={car} alt="giao"/></span><span>购物车</span></li>
                    <li><span><img src={my} alt="giao"/></span><span>我的</span></li>
                </ul>
            </div>
        )
    }
}