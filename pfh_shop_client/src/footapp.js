import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { HomeOutlined, BarsOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

// import './assets/css/index.css';

import Login from './pages/login/login.jsx'
import Home from './pages/home/home.jsx'
import ShopCar from './pages/shopCar/shopCar.jsx'
import Details from './pages/details/details.jsx'
import Sort from "./pages/sort/sort.jsx"
import GoodsXQ from './pages/goodsxq/goodsxq.jsx'
import Cgsm from './pages/cgsm/cgsm.jsx'
import Seek from "./pages/seek/seek.jsx"
import SeekList from "./pages/seekList/seekList.jsx"
import User from './pages/user/user.jsx'
import './assets/css/router.css'
import 'antd/dist/antd'

function App(props) {
    // console.log('app.props=', props)
    const menu = [{
        text: '首页',
        path: '/home',
        icon: <HomeOutlined />
    }, {
        text: '分类',
        path: '/sort',
        icon: <BarsOutlined />
    }, {
        text: '进货单',
        path: '/shopCar',
        icon: <ShoppingCartOutlined />
    }, {
        text: '个人中心',
        path: '/user',
        icon: <UserOutlined />
    }];

    const goto = (path) => {
        props.history.push(path);
    }

    return (
        <div>
            <nav className="footer">
                <ul className="am-g">

                    {
                        menu.map(item => (
                            <li className="am-u-sm-3 footer1" key={item.path} onClick={goto.bind(null, item.path)}>

                                <a>
                                    {item.icon}

                                    {item.text}</a>

                            </li>
                        ))
                    }
                </ul>

            </nav>

            <Switch>
                <Route path={'/home'} component={Home} />
                <Route path={'/goodsxq'} component={GoodsXQ} />
                <Route path={'/cgsm'} component={Cgsm} />
                <Route path={'/seekList'} component={SeekList} />
                <Route path={'/seek'} component={Seek} />
                <Route path={'/sort'} component={Sort} />
                <Route path={'/login'} component={Login} />
                <Route path={'/shopCar'} component={ShopCar} />
                <Route path={'/user'} component={User} />
                <Route path={'/details/:id'} component={Details} />
                <Redirect from={'/'} to={'/Home'} exact />
            </Switch>
        </div>
    );
}
App = withRouter(App);
export default App;
