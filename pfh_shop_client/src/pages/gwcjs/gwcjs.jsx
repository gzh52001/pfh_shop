import React, { Component } from 'react'
import TopBar from '../../components/TopBar/topBar'
import './gwcjs.css'


import {
} from '@ant-design/icons';

export default class Gwcjs extends Component {
    render() {
        return (
            <div className='gwcjs'>
                <TopBar />
                <div className="con">
                    <div className="dname">
                        <input type="radio" />
                        <p>店铺名称：LKN</p>
                    </div>
                    <div className="info">
                        <p>店铺优惠活动：本店铺满1200元即可享有9.8折满减！</p>
                    </div>
                    <div className="floor1">
                        <div className="gn">
                            <input type="radio" />
                            <p>环保白金植物吊坠锆石项链 N196</p>
                            <span>删除</span>
                        </div>
                        <div className="gpin">
                            <div className="gpin-box"><img src="" alt="" /></div>
                            <div className="qty">
                                <div className="top">
                                    <button>+</button>
                                    <span>0</span>
                                    <button>-</button>
                                </div>
                                <div className="bottom">
                                    <p>库存<span>57</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}