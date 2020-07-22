import React from "react"
import { Tabs } from 'antd'
import "./lists.scss"


const TabPane = Tabs.TabPane

// export default function Tebst() {
//     return (
//         <div className="list-tab">
//             <Tabs defaultActiveKey="1">
//                 <TabPane tab="戒指" key="1">戒指戒指戒指</TabPane>
//                 <TabPane tab="项链" key="2">项链项链项链</TabPane>
//                 <TabPane tab="耳饰" key="3">耳饰耳饰耳饰</TabPane>
//                 <TabPane tab="手链" key="4">手链手链手链</TabPane>
//                 <TabPane tab="手镯" key="5">手镯手镯手镯</TabPane>
//                 <TabPane tab="脚链" key="6">脚链脚链脚链</TabPane>
//                 <TabPane tab="脚链" key="7">脚链脚链脚链</TabPane>
//                 <TabPane tab="脚链" key="8">脚链脚链脚链</TabPane>
//                 <TabPane tab="脚链" key="9">脚链脚链脚链</TabPane>
//             </Tabs>
//         </div>
//     )
// }


class Tebst extends React.Component {
    state = {
        bookArr: [
            {
                tabPane: "戒指",
                siteKey:"1",
                siteList:[
                    {
                        img:"",
                        place:"",
                        describe:"",
                        price:"",
                        make:""
                    },
                    {
                        img:"",
                        place:"",
                        describe:"",
                        price:"",
                        make:""
                    },
                    {
                        img:"",
                        place:"",
                        describe:"",
                        price:"",
                        make:""
                    },
                    {
                        img:"",
                        place:"",
                        describe:"",
                        price:"",
                        make:""
                    },
                    {
                        img:"",
                        place:"",
                        describe:"",
                        price:"",
                        make:""
                    },
                    {
                        img:"",
                        place:"",
                        describe:"",
                        price:"",
                        make:""
                    },
                    
                ]
            },
            {
                tabPane: "项链",
                siteKey:"2",
                siteList:[
                    {
                        img:"",
                        place:"",
                        describe:"",
                        price:"",
                        make:""
                    }
                ]
            },
            {
                tabPane: "耳饰",
                siteKey:"3",
                siteList:[
                    {
                        img:"",
                        place:"",
                        describe:"",
                        price:"",
                        make:""
                    }
                ]
                
            },
            {
                tabPane: "手链",
                siteKey:"4",
                siteList:[
                    {
                        img:"",
                        place:"",
                        describe:"",
                        price:"",
                        make:""
                    }
                ]
            },
            {
                tabPane: "手镯",
                siteKey:"5",
                siteList:[
                    {
                        img:"",
                        place:"",
                        describe:"",
                        price:"",
                        make:""
                    }
                ]
            },
            {
                tabPane: "脚链",
                siteKey:"6",
                siteList:[
                    {
                        img:"",
                        place:"",
                        describe:"",
                        price:"",
                        make:""
                    }
                ]
            },
        ]
    }
    render() {
        // 定义数组，将元素放到该数组中
        return (
            <div className="list-tab">
                <Tabs defaultActiveKey="1">
                    {
                        this.state.bookArr.map((item) => {
                            return <TabPane tab={item.tabPane} key={item.siteKey} className="lists-ul">
                                <div></div>
                            </TabPane>
                        }
                        )
                    }
                </Tabs>
            </div>
        )
    }
}
export default Tebst