import React from "react"
import {
    ArrowLeftOutlined,
    SearchOutlined,
    // DashOutlined
}
    from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "./seek-head.css"

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">搜商品</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">搜商家</a>
      </Menu.Item>
      {/* <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item> */}
    </Menu>
  );

export default function SeekHead() {

    return (
        <div className="seek-head">

            <ArrowLeftOutlined className="icon-l" />
            <div className="sousuo">
                <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    搜商品 <DownOutlined />
                    </a>
                </Dropdown>
                <input type="text" placeholder="请输入关键字" />
            </div>
            <div className="icon-r">
                <SearchOutlined />
            </div>
            
        </div>
    )
}