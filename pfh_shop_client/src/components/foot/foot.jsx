import React, { Component } from 'react'
import { Affix, Button } from 'antd';
import { withRouter } from 'react-router-dom'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
// import FlipToBackIcon from '@material-ui/icons/FlipToBack'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
// import MessageIcon from '@material-ui/icons/Message'
import GroupIcon from '@material-ui/icons/Group'
import AppsIcon from '@material-ui/icons/Apps';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import "./foot.scss"
class Foot extends Component {
    state = {
        list: [
            {
                title: "首页",
                label: 'Recents',
                value: 'recents',
                icon: <HomeIcon />,
                path: '/'
            },
            {
                title: "分类",
                label: 'Favorites',
                value: 'favorites',
                icon: <AppsIcon />,
                path: '/sort'
            },
            {
                title: "购物车",
                label: 'Nearby',
                value: 'nearby',
                icon: <ShoppingCartIcon />,
                path: '/shopCar'
            },
            {
                title: "个人中心",
                label: 'Folder',
                value: 'folder',
                icon: <GroupIcon />,
                path: '/login'
            },
            // {
            //     title: "个人中心",
            //     label: 'Folder',
            //     value: 'folder',
            //     icon: <GroupIcon />,
            //     path: '/details'
            // },
        ]
    }

    handleChange = (e, path) => {
        console.log('123456', e, path);
        this.props.history.push(e)

    }
    render() {

        return (
            <div className="foot">
            <Affix offsetBottom={0} onChange={affixed => console.log(affixed)} className="foot-affix">
                <BottomNavigation className='root' onChange={this.handleChange}>
                {
                    this.state.list.map(item => (
                        <div className="foot-ioc">
                            <BottomNavigationAction key={item.path} label={item.label} value={item.path} icon={item.icon} onClick={this.handleChange.bind(this, item.path)} />
                            {/* <span>{item.title}</span> */}
                        </div>
                    ))
                }
            </BottomNavigation>
            </Affix >
           </div> 
        )
    }
}
Foot = withRouter(Foot)
export default Foot
