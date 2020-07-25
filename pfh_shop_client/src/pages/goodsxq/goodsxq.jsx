import React, {Component} from 'react'
import TopNav from '../../components/TopNav/topNav'
import CarBtn from '../../components/CarBtn/carBtn'
import imgg from './img/giao.jpg'
import {
  } from '@ant-design/icons';
import './goodsxq.scss'

export default class GoodsXQ extends Component {
    render(){
        return(
            <div className='goods-xq'>
               <TopNav />
               <div className="img-bar">
                   <div className="img"><img src={imgg} alt=""/></div>
                   <div className="img"><img src={imgg} alt=""/></div>
                   <div className="img"><img src={imgg} alt=""/></div>
                   <div className="img"><img src={imgg} alt=""/></div>
                   <div className="img"><img src={imgg} alt=""/></div>
                   <div className="img"><img src={imgg} alt=""/></div>
                   <div className="img"><img src={imgg} alt=""/></div>
                   <div className="img"><img src={imgg} alt=""/></div>
                   <div className="img"><img src={imgg} alt=""/></div>
                   <div className="img"><img src={imgg} alt=""/></div>
               </div>
               <CarBtn />
            </div>
        )
    }
}