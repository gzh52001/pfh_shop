import React, { Component } from "react"
import "./seek-nav.scss"

class SeekList extends React.Component {
    state = {
        bookArr: [
            { siteName: "纯银" },
            { siteName: "铜" },
            { siteName: "不锈钢" },
            { siteName: "锡合金" },
            { siteName: "镀银" },
            { siteName: "镀金" },
            { siteName: "珍珠" },
            { siteName: "锆石" },
            { siteName: "水晶" },
            { siteName: "半宝石" },
            { siteName: "金属" },
            { siteName: "玻璃" },
        ]
    }
    render() {
        // 定义数组，将元素放到该数组中
        return (
            <div className="seek-nav">
                <ul className="seek-nav-ul">
                    {
                        this.state.bookArr.map((item) => {
                            return <li key={item.siteName}><a>{item.siteName}</a></li>
                        }
                        )
                    }
                </ul>
            </div>
        )
    }
}
export default SeekList