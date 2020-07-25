import React from "react"

import { withRouter } from "react-router-dom"
import "./sort-kk.scss"

class SortKk extends React.Component {
    state = {
        bookArr: [
            {
                siteName: "热门材质",
                siteLists: [
                    { sitelist: "锆石" },
                    { sitelist: "黄色黄金" },
                    { sitelist: "锡合金" },
                    { sitelist: "半宝石" },
                    { sitelist: "石头" },
                    { sitelist: "钛钢" },
                    { sitelist: "珍珠" },
                    { sitelist: "猫眼石" },
                    { sitelist: "玛瑙" }
                ]
            },
            {
                siteName: "流行元素",
                siteLists: [
                    { sitelist: "施华洛世奇" },
                    { sitelist: "动物" },
                    { sitelist: "十字架" },
                    { sitelist: "植物" },
                    { sitelist: "表情" },
                    { sitelist: "水滴" },
                    { sitelist: "月亮" },
                    { sitelist: "流苏" },
                ]
            },
            {
                siteName: "流行风格",
                siteLists: [
                    { sitelist: "经典" },
                    { sitelist: "浪漫" },
                    { sitelist: "复古" },
                    { sitelist: "嘻哈" },
                    { sitelist: "嘻哈" },
                    { sitelist: "水异国风情滴" }
                ]
            },
            {
                siteName: "源头产地",
                siteLists: [
                    { sitelist: "义乌" },
                    { sitelist: "汕尾" },
                    { sitelist: "深圳" },
                    { sitelist: "广州" },
                    { sitelist: "东莞" }
                ]
            },
        ]
    }
    list = () => {
            this.props.history.push("/seeklist")
        }
    render() {
        
        return (
            <ul className="tba2">
                {
                    this.state.bookArr.map((item) => (
                        <li key={item.siteName}>
                            <div className="cailiao">
                                <a>{item.siteName}</a><a>查看全部></a>
                            </div>
                            <ul className="tba2-ul" key={item.sitelist}>
                                {
                                    item.siteLists.map(item => (
                                        <li onClick={this.list}>{item.sitelist}</li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
SortKk = withRouter(SortKk)
export default SortKk