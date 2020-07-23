import React from "react"
import "./sort-list.scss"


class SortList extends React.Component {
    state = {
        bookArr: [
            { siteName: "戒指" },
            { siteName: "项链" },
            { siteName: "耳饰" },
            { siteName: "手链" },
            { siteName: "手镯" },
            { siteName: "脚链" },
            { siteName: "套装" },
            { siteName: "配件" },
            { siteName: "胸针" },
            { siteName: "头饰" },
            { siteName: "钱夹" },
            { siteName: "包装" },
        ]
    }
    render() {
        return (
            <ul className="tba1">
                {
                    this.state.bookArr.map((item => {
                        return <li>{item.siteName}</li>
                    }))

                }
            </ul>
        )
    }
}
export default SortList