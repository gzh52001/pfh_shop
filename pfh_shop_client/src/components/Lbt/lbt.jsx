import React, { Component } from 'react'
import './lbt.css'
import { Carousel } from 'antd';
import p1 from './img/p1.jpg'
import p2 from './img/p2.jpg'
import p3 from './img/p3.jpg'
import p4 from './img/p4.jpg'
import p5 from './img/p5.jpg'
import p6 from './img/p6.jpg'
import p7 from './img/p7.jpg'
import p8 from './img/p8.jpg'

export default class Lbt extends Component {
    render() {
        return (
            <Carousel autoplay className="lbtant">
            <div>
              <img src={p1} alt="" className="imgs"/>
            </div>
            <div>
              <img src={p2} alt="" className="imgs"/>
            </div>
            <div>
              <img src={p3} alt="" className="imgs"/>
            </div>
            <div>
              <img src={p4} alt="" className="imgs"/>
            </div>
            <div>
              <img src={p5} alt="" className="imgs"/>
            </div>
            <div>
              <img src={p6} alt="" className="imgs"/>
            </div>
            <div>
              <img src={p7} alt="" className="imgs"/>
            </div>
            <div>
              <img src={p8} alt="" className="imgs"/>
            </div>
          </Carousel>
        )
    }
}