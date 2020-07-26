import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Dropdown, Breadcrumb, message } from 'antd';
import { clearToken } from '../../../../utils/auth'
import '../../../../static/header.css'

const { SubMenu } = Menu;
const { Header } = Layout;


 const Index = function (props) {

    const menu = (
      <Menu onClick={(p) => {
        if(p.key === "loginOut"){
          clearToken()
          debugger
          props.history.push('/login')
        }else{
          message.info(p.k)
        }
      }}>
        <Menu.Item key="tongzhi">通知中心</Menu.Item>
        <Menu.Item key="setting">设置</Menu.Item>
        <Menu.Item key="loginOut">退出</Menu.Item>
      </Menu>  
    )

    return(
        <Header className="header">
        <div className="logo"><Link to="/admin">管理控制平台</Link></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="menu">
          <Menu.Item key="1"><Link to="/admin/basc">基本</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/admin/nav">导航</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/admin/sucai" >素材</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/admin/todolist" >测试</Link></Menu.Item>
        </Menu>
        <Dropdown overlay={menu} className="dropDwon">
            <div>
              <img src="http://127.0.0.1//user/110506372/photos/110506372.png" alt="" style={{ marginRight: 5, width: 25, height: 25, borderRadius: '50%'}} />
              <span>超级管理员</span>
            </div>
          </Dropdown>
      </Header>
    )
}

export default withRouter(Index)