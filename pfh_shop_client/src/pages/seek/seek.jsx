import React from "react"
import SeekHead from "./seek-head/seek-head"
import "./seek.css"

export default function Seek() {
    return (
        <div className="seek">
            <SeekHead />
            <div className="dajia">
                <a href="###">大家都在搜</a>
            </div>
            <ul className="taby">
                <li>纯银首饰</li>
                <li>925戒指</li>
                <li>抖音爆款</li>
                <li>施华洛世奇元素</li>
                <li>毛衣链</li>
            </ul>
        </div>
    )
}