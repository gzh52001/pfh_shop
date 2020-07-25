import React, { Component } from 'react'
import xq1 from './img/xiangqing1.png'
import xq2 from './img/xiangqing2.png'
import xq3 from './img/xiangqing3.png'
import xq4 from './img/adddata1.png'
import './carBtn.css'
import {
} from '@ant-design/icons';
import { withRouter } from 'react-router-dom'

class CarBtn extends Component {
    // gocar = () => {
    //     this.props.history.push("/gwcjs")
    // }
    gologin = () => {
        this.props.history.push("/login")
    }
    render() {
        return (
            <div className='car-btn'>
                <ul>
                    <li className="b1"><span className="x1"><img src={xq1} alt="giao" /></span><span className="g1">旺铺</span></li>
                    <li className="b1"><span className="x1"><img src={xq2} alt="giao" /></span><span className="g1">收藏</span></li>
                    <li className="b1"><span className="x1"><img src={xq3} alt="giao" /></span><span className="g1">客服</span></li>
                    <li className="g22"><span className="x1 x11"><img src={xq4} alt="giao" /></span><span className="g2" onClick={this.gologin}>数据包</span></li>
                    <li><span className="g3" onClick={this.gologin}>加入进货单</span></li>
                </ul>
            </div>
        )
    }
}
CarBtn = withRouter(CarBtn)
export default CarBtn 