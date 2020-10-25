import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
export default class Sidebar extends React.Component {
  
  render() {
    return (
      <Sider className="site-layout-background">
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          图片管理
        </Menu.Item>
        <Menu.Item key="2">
          回收站
        </Menu.Item>
      </Menu>
      </Sider>
    );
  }
}