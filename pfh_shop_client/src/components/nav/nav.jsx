import React from "react"
import shouye from "./images/shouye.png"
import jiezhi from "./images/jiezhi.png"
import ershi from "./images/ershi.png"
import shoulian from "./images/shoulian.png"
import shouzhuo from "./images/shouzhuo.png"
import xianglian from "./images/xianglian.png"
import jiaolian from "./images/jiaolian.png"
import taozhuang from "./images/taozhuang.png"
import "./nav.css"


export default function NavApp() {
    // render() {
        return (
            <div className="nav">
                <ul className="nav_ul">
                    <li><img src={shouye} alt="首页"/><a href="###">首页</a></li>
                    <li><img src={jiezhi} alt="戒指"/><a href="###">戒指</a></li>
                    <li><img src={xianglian} alt="项链"/><a href="###">项链</a></li>
                    <li><img src={ershi} alt="耳饰"/><a href="###">耳饰</a></li>
                    <li><img src={shoulian} alt="手链"/><a href="###">手链</a></li>
                    <li><img src={shouzhuo} alt="手镯"/><a href="###">手镯</a></li>
                    <li><img src={jiaolian} alt="脚链"/><a href="###">脚链</a></li>
                    <li><img src={taozhuang} alt="套装"/><a href="###">套装</a></li>
                </ul>
            </div>
        )
}

 