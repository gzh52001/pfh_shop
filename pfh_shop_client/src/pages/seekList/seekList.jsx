import React from "react"
import "./seekList.scss"
import SeekHead from "../seek/seek-head/seek-head"
import { Affix } from 'antd';
import Nav from "../../components/nav/nav"
import SeekNav from "./seek-nav/seek-nav"
import SeekData from "./seek-data/seek-data"

export default function SeekList() {
    return (
        <div className="seekList">
            <Affix>
                <div className="seek-list">
                    <SeekHead />
                    <Nav />
                    <SeekNav />
                </div>
            </Affix>
            <SeekData />
        </div>

    )
}