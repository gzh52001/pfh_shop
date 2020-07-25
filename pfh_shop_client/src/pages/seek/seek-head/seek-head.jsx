import React, { Component } from "react"
import {
    ArrowLeftOutlined,
    SearchOutlined,
    // DashOutlined,

}
    from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { withRouter } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons';
import "./seek-head.scss"

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="###">搜商品</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="###">搜商家</a>
        </Menu.Item>
        {/* <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item> */}
    </Menu>
);

class SeekHead extends Component {

    huitui = () => {
        this.props.history.goBack()
    }
    list = () => {
        this.props.history.push("/seeklist")
    }

    render() {
        return (
            <div className="seek-head" >

                <ArrowLeftOutlined className="icon-l" onClick={this.huitui} />
                <div className="sousuo">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            搜商品
                    <DownOutlined />
                        </a>
                    </Dropdown>
                    <input type="text" placeholder="请输入关键字" />
                </div>
                <div className="icon-r">
                    <SearchOutlined onClick={this.list} />
                </div>

            </div>
        )
    }

}
SeekHead = withRouter(SeekHead)
export default SeekHead