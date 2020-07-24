import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login/login.jsx'
import Home from './pages/home/home.jsx'
import ShopCar from './pages/shopCar/shopCar.jsx'
import Details from './pages/details/details.jsx'
import Sort from "./pages/sort/sort.jsx"
import GoodsXQ from './pages/goodsxq/goodsxq.jsx'
import Cgsm from './pages/cgsm/cgsm.jsx'
import Seek from "./pages/seek/seek.jsx"
import SeekList from "./pages/seekList/seekList.jsx"
// import Foot from "./components/foot/foot.jsx"
// import Bat from "./pages/bat.jsx"
import 'antd/dist/antd'
/**
 * 应用的根组件
 */

class App extends Component {

    render() {
        return (
            <>
                <HashRouter>
                    <Switch>
                        <Route path='/goodsxq' component={GoodsXQ}></Route>
                        <Route path='/cgsm' component={Cgsm}></Route>
                        <Route path='/seekList' component={SeekList}></Route>
                        <Route path='/seek' component={Seek}></Route>
                        <Route path='/sort' component={Sort}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/shopCar' component={ShopCar}></Route>
                        <Route path='/details' component={Details}></Route>
                        <Route path='/' component={Home}></Route>
                    </Switch>
                    {/* <Foot /> */}
                </HashRouter>
                
            </>
        )
    }
}
export default App
