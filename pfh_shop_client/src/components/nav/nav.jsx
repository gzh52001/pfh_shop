import React from "react"
import "./nav.scss"
import { withRouter } from "react-router-dom"


class Nav extends React.Component {
    state = {
        bookArr: [
            {
                siteName: "首页",
                siteImg: "https://cdnimg.pfhoo.com/Content/201808/20180808184719562.png"
            },
            {
                siteName: "戒指",
                siteImg: "https://cdnimg.pfhoo.com/Content/201808/20180808141508995.png"
            },
            {
                siteName: "项链",
                siteImg: "https://cdnimg.pfhoo.com/Content/201808/20180808112947388.png"
            },
            {
                siteName: "耳饰",
                siteImg: "https://cdnimg.pfhoo.com/Content/201808/20180808112956168.png"
            },
            {
                siteName: "手链",
                siteImg: "https://cdnimg.pfhoo.com/Content/201808/20180808113008115.png"
            },
            {
                siteName: "手镯",
                siteImg: "https://cdnimg.pfhoo.com/Content/201808/20180808113016388.png"
            },
            {
                siteName: "脚链",
                siteImg: "https://cdnimg.pfhoo.com/Content/201808/20180808113026450.png"
            },
            {
                siteName: "套装",
                siteImg: "https://cdnimg.pfhoo.com/Content/201808/20180813094856938.png"
            },
        ]
    }
    goseek = () => {
        this.props.history.push("/seeklist")
    }
    render() {
        // 定义数组，将元素放到该数组中
        return (
            <div className="nav">
                <ul className="nav_ul">
                    {
                        this.state.bookArr.map((item) => {
                            return <li key={item.siteName} onClick={this.goseek}>
                                <img src={item.siteImg} alt="" /><a>{item.siteName}</a>
                            </li>
                        }
                        )
                    }
                </ul>
            </div>
        )
    }
}
Nav = withRouter(Nav)
export default Nav
