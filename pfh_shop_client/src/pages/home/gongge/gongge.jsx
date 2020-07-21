import React, { Component } from 'react'
import img1 from "./images/kuajing.jpg"
import img2 from "./images/shengdan.jpg"
import img3 from "./images/daifa.png"
import img4 from "./images/zixun.png"
import "./gongge.css"

export default class GongGe extends Component {
    render() {
        return (
            <ul className="gongge">
                <li><img src={img1} alt="跨境专供" /><a href="###">跨境专供</a></li>
                <li><img src={img2} alt="圣诞爆款" /><a href="###">圣诞爆款</a></li>
                <li><img src={img3} alt="热销排行" /><a href="###">热销排行</a></li>
                <li><img src={img4} alt="资讯中心" /><a href="###">资讯中心</a></li>
            </ul>
        )
    }
}