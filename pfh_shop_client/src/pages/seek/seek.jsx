import React, { Component } from "react"
import SeekHead from "./seek-head/seek-head"
import "./seek.scss"


class Seek extends React.Component {
    state = {
        bookArr: [
            { siteName: "纯银首饰" },
            { siteName: "925戒指" },
            { siteName: "抖音爆款" },
            { siteName: "施华洛世奇元素" },
            { siteName: "毛衣链" }
        ]
    }
    render() {
        // 定义数组，将元素放到该数组中
        return (
            <div className="seek">
                <SeekHead />
                <div className="dajia">
                    <a href="###">大家都在搜</a>
                </div>
                <ul className="taby">
                    {
                        this.state.bookArr.map((item) => {
                            return <li key={item.siteName}>{item.siteName}</li>
                        }
                        )
                    }
                </ul>
            </div>
        )
    }
}
export default Seek