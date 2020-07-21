import React from "react"
import "./xinkuan.css"
import img1 from "./images/jiezhi.jpg"
import { Carousel } from 'antd';


export default function Xklb() {
    // render() {
    return (

        <Carousel className="xklb">
            <div className="xklb-box">
                <div className="xklb-ctn">
                    <h2>戒指</h2>
                </div>
                <div className="xklb-ctn">
                    <img src={img1} alt="" />
                    <div>
                        <p> S925 时尚纯银戒指  水晶来自施华洛世奇元素  蝴蝶花造型纯银戒指 </p>
                        <span>￥:39.30</span>
                    </div>
                </div>
                <div className="xklb-ctn">
                    <img src={img1} alt="" />   
                    <div>
                        <p> S925 时尚纯银戒指  水晶来自施华洛世奇元素  蝴蝶花造型纯银戒指 </p>
                        <span>￥:39.30</span>
                    </div>
                </div>
                <div className="xklb-ctn">
                    <img src={img1} alt="" />
                    <div>
                        <p> S925 时尚纯银戒指  水晶来自施华洛世奇元素  蝴蝶花造型纯银戒指 </p>
                        <span>￥:39.30</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="xklb-ctn">
                    <h2>戒指</h2>
                </div>
                <div className="xklb-ctn">
                    <img src={img1} alt="" />
                    <div>
                        <p> S925 时尚纯银戒指  水晶来自施华洛世奇元素  蝴蝶花造型纯银戒指 </p>
                        <span>￥:39.30</span>
                    </div>
                </div>
                <div className="xklb-ctn">
                    <img src={img1} alt="" />   
                    <div>
                        <p> S925 时尚纯银戒指  水晶来自施华洛世奇元素  蝴蝶花造型纯银戒指 </p>
                        <span>￥:39.30</span>
                    </div>
                </div>
                <div className="xklb-ctn">
                    <img src={img1} alt="" />
                    <div>
                        <p> S925 时尚纯银戒指  水晶来自施华洛世奇元素  蝴蝶花造型纯银戒指 </p>
                        <span>￥:39.30</span>
                    </div>
                </div>
            </div>
            
        </Carousel>

    )
    // }

}