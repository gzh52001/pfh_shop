import React from "react"
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
// import "./lists.scss"

export default function Tebst() {
    return (
        <div className="list-tab">
            <Tabs defaultActiveKey="1">
                <TabPane tab="戒指" key="1">戒指戒指戒指</TabPane>
                <TabPane tab="项链" key="2">项链项链项链</TabPane>
                <TabPane tab="耳饰" key="3">耳饰耳饰耳饰</TabPane>
                <TabPane tab="手链" key="4">手链手链手链</TabPane>
                <TabPane tab="手镯" key="5">手镯手镯手镯</TabPane>
                <TabPane tab="脚链" key="6">脚链脚链脚链</TabPane>
                <TabPane tab="脚链" key="7">脚链脚链脚链</TabPane>
                <TabPane tab="脚链" key="8">脚链脚链脚链</TabPane>
                <TabPane tab="脚链" key="9">脚链脚链脚链</TabPane>
            </Tabs>
        </div>

    )
}