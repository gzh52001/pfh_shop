import React, {Component} from 'react'

import './goodsTitle.css'
import {
    HeartOutlined
  } from '@ant-design/icons';

export default class GoodsTitle extends Component {
    render(){
        return(
            <div className='goods-title'>
               <ul>
                   <li className="title"><a href="#">跨境新品S925纯银宝石戒指亚马逊热卖简约百搭女戒指 指环   LHW200215SR002</a></li>
                   <li className="xin"><a href="#"><i className="icons-list"><HeartOutlined /></i></a></li>
                   <li className="shoucang"><a href="#">收藏</a></li>
               </ul>
            </div>
        )
    }
}