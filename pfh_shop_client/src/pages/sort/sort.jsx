import React from "react"
import Head from "../../components/head/header"
import img1 from "./images/xl.png"
import img2 from "./images/ss.png"
import SortList from "./sort-list/sort-list"
import SortKk from "./sort-kk/sort-kk"
import Foot from "../../components/foot/foot"
import "./sort.scss"

class Sort extends React.Component {
    list=()=>{
        this.props.history.push("/seeklist")
    }
    render() {
        return (
            <div className="sort-b">
                <Head />
                <div className="sort-gg">
                    <ul className="sort-ul">
                        <li onClick={this.list}><img src={img1} alt="" /><a>时尚饰品</a></li>
                        <li onClick={this.list}><img src={img2} alt="" /><a>纯银首饰</a></li>
                        <li onClick={this.list}><img src={img2} alt="" /><a>适销平台</a></li>
                    </ul>
                </div>
                <div className="sort-n">
                    <SortList />
                    <SortKk />
                </div>
                <Foot />
            </div>
        )
    }

}
export default Sort