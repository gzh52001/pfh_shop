import React from 'react'
import "./seek-data.scss"
import { withRouter } from 'react-router-dom'

class SeekData extends React.Component {
    state = {
        bookArr: [
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200319/49b2b751-18b8-47db-a041-113434bda0be.jpg",
                place: "深圳产地",
                describe: "跨境新品S925纯银宝石戒指亚马逊热卖简约百搭",
                price: "12.64",
                make: "0"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/304d1438-9845-4bcf-a0a2-2c43320ca4e4.jpg",
                place: "深圳产地",
                describe: "s925纯银戒指简约单钻戒指",
                price: "10.23",
                make: "0"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/d01a969f-e41e-4dae-bbc8-fa4f9ac73121.jpg",
                place: "深圳产地",
                describe: "欧美热卖女戒 S925纯银镶钻戒指奢华气质",
                price: "28.49",
                make: "1"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/ac2690aa-c876-4802-a521-8842f4d5d43b.jpg",
                place: "深圳产地",
                describe: "时尚S925纯银开口戒指 女款 韩版创意树藤指环",
                price: "13.2",
                make: "13"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/c65e3657-5b3f-4ba7-b46e-711e54a33387.jpg",
                place: "深圳产地",
                describe: "欧美新款镶钻双层戒指 简约圆形锆石女戒",
                price: "29.49",
                make: "2"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20170615/609fb991-4231-46b0-a968-e247580b7b1a.jpg",
                place: "深圳产地",
                describe: "绿松石戒指 高档时尚戒指 情人浪漫心形戒指",
                price: "13",
                make: "15"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200319/49b2b751-18b8-47db-a041-113434bda0be.jpg",
                place: "深圳产地",
                describe: "跨境新品S925纯银宝石戒指亚马逊热卖简约百搭",
                price: "12.64",
                make: "0"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/304d1438-9845-4bcf-a0a2-2c43320ca4e4.jpg",
                place: "深圳产地",
                describe: "s925纯银戒指简约单钻戒指",
                price: "10.23",
                make: "0"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/d01a969f-e41e-4dae-bbc8-fa4f9ac73121.jpg",
                place: "深圳产地",
                describe: "欧美热卖女戒 S925纯银镶钻戒指奢华气质",
                price: "28.49",
                make: "1"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/ac2690aa-c876-4802-a521-8842f4d5d43b.jpg",
                place: "深圳产地",
                describe: "时尚S925纯银开口戒指 女款 韩版创意树藤指环",
                price: "13.2",
                make: "13"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/c65e3657-5b3f-4ba7-b46e-711e54a33387.jpg",
                place: "深圳产地",
                describe: "欧美新款镶钻双层戒指 简约圆形锆石女戒",
                price: "29.49",
                make: "2"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20170615/609fb991-4231-46b0-a968-e247580b7b1a.jpg",
                place: "深圳产地",
                describe: "绿松石戒指 高档时尚戒指 情人浪漫心形戒指",
                price: "13",
                make: "15"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200319/49b2b751-18b8-47db-a041-113434bda0be.jpg",
                place: "深圳产地",
                describe: "跨境新品S925纯银宝石戒指亚马逊热卖简约百搭",
                price: "12.64",
                make: "0"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/304d1438-9845-4bcf-a0a2-2c43320ca4e4.jpg",
                place: "深圳产地",
                describe: "s925纯银戒指简约单钻戒指",
                price: "10.23",
                make: "0"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/d01a969f-e41e-4dae-bbc8-fa4f9ac73121.jpg",
                place: "深圳产地",
                describe: "欧美热卖女戒 S925纯银镶钻戒指奢华气质",
                price: "28.49",
                make: "1"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/ac2690aa-c876-4802-a521-8842f4d5d43b.jpg",
                place: "深圳产地",
                describe: "时尚S925纯银开口戒指 女款 韩版创意树藤指环",
                price: "13.2",
                make: "13"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/c65e3657-5b3f-4ba7-b46e-711e54a33387.jpg",
                place: "深圳产地",
                describe: "欧美新款镶钻双层戒指 简约圆形锆石女戒",
                price: "29.49",
                make: "2"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20170615/609fb991-4231-46b0-a968-e247580b7b1a.jpg",
                place: "深圳产地",
                describe: "绿松石戒指 高档时尚戒指 情人浪漫心形戒指",
                price: "13",
                make: "15"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20191024/13b1edde-5503-4121-abba-c543538afe50.jpg",
                place: "深圳产地",
                describe: "S925纯银 精工白贝鱼尾带钻项链",
                price: "34.05",
                make: "99"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/295fcdc0-fe61-4449-9635-3e6a925c2dae.jpg",
                place: "深圳产地",
                describe: "925纯银时尚独角兽吊坠项链",
                price: "35.52",
                make: "9"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/5dd75b15-ddb4-4800-b14f-39fd7fb32957.jpg",
                place: "深圳产地",
                describe: "925纯银 金星吊坠项链",
                price: "27.47",
                make: "0"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/de245b91-8cd4-46b1-9353-aa6931212fc9.jpg",
                place: "深圳产地",
                describe: "925纯银 双月亮滑动吊坠项链",
                price: "27.61",
                make: "0"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/162e4646-cd25-4142-8f33-1d37dad1e628.jpg",
                place: "深圳产地",
                describe: "S925纯银月光石项链女款小清新简约甜美风蓝色渐变圆形锁骨链",
                price: "29.05",
                make: "0"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200117/aa36fd9a-87d9-48b9-831c-85de1ede168b.jpg",
                place: "深圳产地",
                describe: "925纯银 LOVE爱心嘴唇项链",
                price: "30.9",
                make: "20"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200116/883da5c2-c397-42e3-8afc-84bf71510001.jpg",
                place: "深圳产地",
                describe: "925纯银 单钻吊满钻心项链",
                price: "28.8",
                make: "10"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20190419/b662e887-b807-4496-8072-0fb4ee50fe19.jpg",
                place: "深圳产地",
                describe: "来自施华洛世奇元素 S925纯银可爱小猪吊坠项链",
                price: "51.62",
                make: "112"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20191024/13b1edde-5503-4121-abba-c543538afe50.jpg",
                place: "深圳产地",
                describe: "S925纯银 精工白贝鱼尾带钻项链",
                price: "34.05",
                make: "99"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/295fcdc0-fe61-4449-9635-3e6a925c2dae.jpg",
                place: "深圳产地",
                describe: "925纯银时尚独角兽吊坠项链",
                price: "35.52",
                make: "9"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/5dd75b15-ddb4-4800-b14f-39fd7fb32957.jpg",
                place: "深圳产地",
                describe: "925纯银 金星吊坠项链",
                price: "27.47",
                make: "0"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/de245b91-8cd4-46b1-9353-aa6931212fc9.jpg",
                place: "深圳产地",
                describe: "925纯银 双月亮滑动吊坠项链",
                price: "27.61",
                make: "0"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/162e4646-cd25-4142-8f33-1d37dad1e628.jpg",
                place: "深圳产地",
                describe: "S925纯银月光石项链女款小清新简约甜美风蓝色渐变圆形锁骨链",
                price: "29.05",
                make: "0"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200117/aa36fd9a-87d9-48b9-831c-85de1ede168b.jpg",
                place: "深圳产地",
                describe: "925纯银 LOVE爱心嘴唇项链",
                price: "30.9",
                make: "20"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200116/883da5c2-c397-42e3-8afc-84bf71510001.jpg",
                place: "深圳产地",
                describe: "925纯银 单钻吊满钻心项链",
                price: "28.8",
                make: "10"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20190419/b662e887-b807-4496-8072-0fb4ee50fe19.jpg",
                place: "深圳产地",
                describe: "来自施华洛世奇元素 S925纯银可爱小猪吊坠项链",
                price: "51.62",
                make: "112"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20191024/13b1edde-5503-4121-abba-c543538afe50.jpg",
                place: "深圳产地",
                describe: "S925纯银 精工白贝鱼尾带钻项链",
                price: "34.05",
                make: "99"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/295fcdc0-fe61-4449-9635-3e6a925c2dae.jpg",
                place: "深圳产地",
                describe: "925纯银时尚独角兽吊坠项链",
                price: "35.52",
                make: "9"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/5dd75b15-ddb4-4800-b14f-39fd7fb32957.jpg",
                place: "深圳产地",
                describe: "925纯银 金星吊坠项链",
                price: "27.47",
                make: "0"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/de245b91-8cd4-46b1-9353-aa6931212fc9.jpg",
                place: "深圳产地",
                describe: "925纯银 双月亮滑动吊坠项链",
                price: "27.61",
                make: "0"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200707/162e4646-cd25-4142-8f33-1d37dad1e628.jpg",
                place: "深圳产地",
                describe: "S925纯银月光石项链女款小清新简约甜美风蓝色渐变圆形锁骨链",
                price: "29.05",
                make: "0"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200117/aa36fd9a-87d9-48b9-831c-85de1ede168b.jpg",
                place: "深圳产地",
                describe: "925纯银 LOVE爱心嘴唇项链",
                price: "30.9",
                make: "20"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20200116/883da5c2-c397-42e3-8afc-84bf71510001.jpg",
                place: "深圳产地",
                describe: "925纯银 单钻吊满钻心项链",
                price: "28.8",
                make: "10"
            },
            {
                img: "https://cdnimg.pfhoo.com/Pro/s/20190419/b662e887-b807-4496-8072-0fb4ee50fe19.jpg",
                place: "深圳产地",
                describe: "来自施华洛世奇元素 S925纯银可爱小猪吊坠项链",
                price: "51.62",
                make: "112"
            },
        ]
    }
    gogwcjs = () => {
        this.props.history.push("/gwcjs")
    }
    goglogin = () => {
        this.props.history.push("/login")
    }
    gogxq = () => {
        this.props.history.push("/details")
    }
    render() {
        return (
            <div className="seek-data">
                {
                    this.state.bookArr.map((item) => (
                        <div className="lists-li" key={item.img}>
                            <img src={item.img} alt="" onClick={this.gogxq} />
                            <p onClick={this.gogxq}>
                                <i>{item.place}</i>{item.describe}
                            </p>
                            <div className="lists-pl">
                                <span>
                                    <i>¥ </i>{item.price}
                                </span>
                                <span>成交额:{item.make}</span>
                            </div>
                            <div className="lists-b">
                                <a onClick={this.gologin}><img src="./images/1.png" alt="" /></a>
                                <a onClick={this.gogwcjs}>加入进货单</a>
                            </div>

                        </div>
                    ))
                }
            </div>
        )
    }
}
SeekData = withRouter(SeekData)
export default SeekData