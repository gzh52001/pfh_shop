import React, {Component} from 'react'
import './home.css'
import Head from "../../components/head/header"
import NavApp from "../../components/nav/nav"
import Lunbo from "../../components/carousel/carousel"
import GongGe from "./gongge/gongge"
import img1 from "./images/tu3.jpg"
import img2 from "./images/tu4.jpg"
import Xklb from "./xinkuan/xinkuan"
import Tebst from "./lists/lists"
import { Affix } from 'antd'
/**
 * 首页的路由组件
 */
export default class Home extends Component {
    render (){
        return(
            <div className="home">
                <Affix>
                    <Head />
                    <NavApp />
                </Affix>
                <Lunbo />
                <div className="kuajing">
                    <img src={img1} alt=""/><img src={img2} alt=""/>
                    <GongGe />
                </div>
                <div className="huiyuan">
                    <div className="huiyuan-l">
                        <h3>您还不是<span>PFHOO</span>会员</h3>
                        <a href="###">加入立享专属特权>></a>
                    </div>
                    <a href="###">点击免费加入</a>
                </div>
                <div className="xinkuan">
                    <div className="xinkuan-content">
                    <Xklb />
                    </div>
                </div>
                <div className="home-list">
                    <Tebst />

                </div>
            </div>
            
        )
    }
}