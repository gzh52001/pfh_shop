import React from "react"
import { Carousel } from 'antd';
import "./carousel.css"
import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.jpg"
import img4 from "./images/4.jpg"
import img5 from "./images/5.jpg"


export default function Lunbo() {
    // render() {
        return (
           
            <Carousel className="lunbo" autoplay>
                <div><img src={img1} alt="" /></div>
                <div><img src={img2} alt="" /></div>
                <div><img src={img3} alt="" /></div>
                <div><img src={img4} alt="" /></div>
                <div><img src={img5} alt="" /></div>
            </Carousel>

        )
    // }
    
}
