import React from "react"
import Head from "../../components/head/header"
import img1 from "./images/xl.png"
import img2 from "./images/ss.png"
import "./sort.css"
import SortList from "./sort-list/sort-list"
import SortKk from "./sort-kk/sort-kk"

export default function Sort() {
   
        return (
            <div className="sort-b">
                <Head />
                <div className="sort-gg">
                    <ul className="sort-ul">
                    <li><img src={img1} alt=""/><a href="###">时尚饰品</a></li>
                    <li><img src={img2} alt=""/><a href="###">纯银首饰</a></li>
                    <li><img src={img2} alt=""/><a href="###">适销平台</a></li>
                    </ul>
                </div>
                <div className="sort-n">
                    <SortList />
                    <SortKk />
                </div>
            </div>
        )
    
}