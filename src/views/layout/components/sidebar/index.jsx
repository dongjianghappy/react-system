import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { withRouter } from 'react-router-dom'
import Channel from '../../../../components/channel'
import ChannelList from '../../../channel/components/channelList';

import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';

// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { adminRouter } from '@/router'

import { connect } from 'react-redux'
import dispatchToProps from '@/store/dispatch'

// const { SubMenu } = Menu;
// const { Sider } = Layout;
const _routers = adminRouter.filter(route => route.isShow)
const path = window.location.pathname.split("/")[2]

const ee = _routers.filter(route => route.path === `/admin/${path}`)

if(ee.length === 0){
  ee[0] = {module: 'basic'}
}

const routers = _routers.filter(route => route.module === ee[0].module)


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends React.Component {

  // 模块页面跳转后需要刷新，主要时显示左侧菜单栏
  route = (path, q='') => {
    debugger
    this.props.history.push(path)
    this.props.handle(q)
    //window.location.reload()
  }

  render() {
    const siderRouter = _routers.filter(route => route.module === this.props.routes)

    return (
        <Sider  collapsed={this.props.screen} className="site-layout-background">
          <div className="menus">
            <ChannelList click={this.route} butName="频道" title="频道">
              
            </ChannelList>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          { 
                siderRouter.map((item, i) => (
                  
                  item.children ? //  && item.child !== 0 
                  <SubMenu key={i} icon={<UserOutlined />} title={item.name}>
                  {
                      item.children.map((list, i) => (
                      <Menu.Item key={ i+item.name }>
                          <Link to={list.path}>{ list.name }</Link>
                      </Menu.Item>
                      ))
                  }
                  </SubMenu>
                  : 
                  <Menu.Item key={ i+100 }>
                      <Link to={item.path}>{ item.name }</Link>
                  </Menu.Item>
                  ))
            }
          </Menu>
        </Sider>
    );
  }
}

const stateToProops = (state) => {
  console.log(state);
  return {
      list: state.login
  }
}

export default withRouter(connect(stateToProops, dispatchToProps)(Sidebar))