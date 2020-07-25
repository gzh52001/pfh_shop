import React from "react"
import { Carousel } from 'antd';
import "./xinkuan.scss"
import { withRouter } from "react-router-dom";

class Xklb extends React.Component {
    state = {
        bookArr: [
            {
                siteTitle: "戒指",
                siteTitles: [
                    {
                        siteImg: "https://cdnimg.pfhoo.com/Pro/s/20180404/8a22565d-9bb3-4b87-bf58-00e9db0e2d28.jpg",
                        siteCon: " S925 时尚纯银戒指  水晶来自施华洛世奇元素  蝴蝶花造型纯银戒指 ",
                        sitePrice: "￥:39.30"
                    },
                    {
                        siteImg: "https://cdnimg.pfhoo.com/Pro/s/20180623/073c1a7d-8bba-4113-9094-2461430c2465.jpg",
                        siteCon: "  水晶来自施华洛世奇元素   S925纯银蝴蝶戒指 ",
                        sitePrice: "￥:35.00"
                    },
                    {
                        siteImg: "https://imgsupp.pfhoo.com/Pro/s/20180919/e8684b72-0435-4f32-9c4b-1789bdcf43f9.jpg",
                        siteCon: "欧美热销微镶饰品 爱的花瓣心形戒指 幸运四叶草密镶锆石戒指批发 ",
                        sitePrice: "￥:8.50d"
                    }]
            },
            {
                siteTitle: "项链",
                siteTitles: [
                    {
                        siteImg: "https://cdnimg.pfhoo.com/Pro/s/20180928/2ee07efe-6809-4220-9b66-32fe30d3f0a9.jpg",
                        siteCon: " 水晶来自施华洛世奇元素  S925纯银蝴蝶叠带吊坠项链 ",
                        sitePrice: "￥:49.00"
                    },
                    {
                        siteImg: "https://cdnimg.pfhoo.com/Pro/s/20180525/bf02a91e-fe13-4c7b-93bf-600fca958663.jpg",
                        siteCon: "  水晶来自施华洛世奇元素   S925纯银蝴蝶戒指 ",
                        sitePrice: "￥:44.00"
                    },
                    {
                        siteImg: "https://imgsupp.pfhoo.com/Pro/s/20180821/6d1e5f01-d286-4ef7-bee5-fe2fc192f426.jpg",
                        siteCon: "S925纯银爱心项链满钻爱心吊坠韩版时尚潮流锁骨链厂家批发 ",
                        sitePrice: "￥:25.00"
                    }]
            },
            {
                siteTitle: "耳饰",
                siteTitles: [
                    {
                        siteImg: "https://cdnimg.pfhoo.com/Pro/s/20180929/6de6d194-66f5-4c16-8ae9-0ef6fe9802f5.jpg",
                        siteCon: " 来自施华洛世奇元素 S925纯银蝴蝶结珍珠耳钉 ",
                        sitePrice: "￥:39.30"
                    },
                    {
                        siteImg: "https://cdnimg.pfhoo.com/Pro/s/20180929/0ced5512-59c8-4c41-8810-a75514e678a2.jpg",
                        siteCon: " 来自施华洛世奇元素 S925纯银星星水晶耳钉 ",
                        sitePrice: "￥:69.00"
                    },
                    {
                        siteImg: "https://imgsupp.pfhoo.com/Pro/s/20180717/6b8c4e2b-a2e9-4e2b-bb7e-b35287fba9d3.jpg",
                        siteCon: "韩版锆石夸张防过敏女欧美金属长款流苏耳环时尚耳钉耳饰批发饰品 ",
                        sitePrice: "￥:3.70"
                    }]
            },
            {
                siteTitle: "手镯",
                siteTitles: [
                    {
                        siteImg: "https://cdnimg.pfhoo.com/Pro/s/20180731/f8a0914a-ed15-417e-9bbc-a831f761c0f0.jpg",
                        siteCon: "来自施华洛世奇元素水晶 S925纯银开口手镯 ",
                        sitePrice: "￥:59.00"
                    },
                    {
                        siteImg: "https://imgsupp.pfhoo.com/Pro/s/20180831/1f95e0e7-9fce-426f-ab97-410fbbee7857.jpg",
                        siteCon: "S925纯银时尚二合一手镯微镶双层圆圈球拍手链手环饰品闺蜜礼物 ",
                        sitePrice: "￥:44.00"
                    },
                    {
                        siteImg: "https://imgsupp.pfhoo.com/Pro/s/20180726/e294d01b-2956-46f6-994d-e804f38cde53.jpg",
                        siteCon: "QIANSEYE 千色叶 足银s999韩版车花珠手镯简约百搭超闪镂空坠珠多节手环 ",
                        sitePrice: "￥:68.00"
                    }]
            },
            {
                siteTitle: "手链",
                siteTitles: [
                    {
                        siteImg: "https://cdnimg.pfhoo.com/Pro/s/20180827/3282510f-cdaf-489f-b8f9-1010d87986b6.jpg",
                        siteCon: " 来自施华洛世奇元素 S925纯银彩色生命树水晶手链 ",
                        sitePrice: "￥:39.30"
                    },
                    {
                        siteImg: "https://cdnimg.pfhoo.com/Pro/s/20180815/3b350520-e3a2-4a10-a338-7647b2d85642.jpg",
                        siteCon: " 来自施华洛世奇元素 S925纯银条形多色轻奢时尚手链 ",
                        sitePrice: "￥:29.00"
                    },
                    {
                        siteImg: "https://imgsupp.pfhoo.com/Pro/s/20180717/ea93118e-50d9-4ef7-915b-3f49e8e9e921.jpg",
                        siteCon: "wish新款 欧美时尚复古船锚浪漫密码LOVE横牌多层编织手链 ",
                        sitePrice: "￥:1.80"
                    }]
            }
        ]
    }
    gopage = () => {
        this.props.history.push("/details")
    }
    render() {
        // 定义数组，将元素放到该数组中
        // console.log(this.state.bookArr[0].siteTitles);
        return (
            <Carousel className="xklb">
                {
                    this.state.bookArr.map((item) => (

                        <div className="xklb-box" key={item.siteTitle}>
                            <div className="xklb-ctnt">
                                <h2>{item.siteTitle}</h2>
                            </div>
                            {
                                item.siteTitles.map(item => (
                                    <div className="xklb-ctn" key={item.siteImg} onClick={this.gopage}>
                                        <img src={item.siteImg} alt="" />
                                        <div>
                                            <p>{item.siteCon}</p>
                                            <span>{item.sitePrice}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </Carousel>
        )
    }
}
Xklb = withRouter(Xklb)
export default Xklb