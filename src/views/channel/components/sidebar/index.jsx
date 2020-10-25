import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';

import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';

// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { adminRouter } from '../../../../router'

// const { SubMenu } = Menu;
// const { Sider } = Layout;
const _routers = adminRouter.filter(route => route.isShow)
const path = window.location.pathname.split("/")[2]

const ee = _routers.filter(route => route.path === `/admin/${path}`)

if(ee.length === 0){
  ee[0] = {module: 'basic'}
}

const routers = _routers.filter(route => route.module === ee[0].module)


// export default class Sidebar extends React.Component{
    
//     render(){
//         return(
//             <Sider width={200} className="site-layout-background">
//             <Menu
//               mode="inline"
//               defaultSelectedKeys={['0']}
//               defaultOpenKeys={['sub1']}
//               style={{ height: '100%', borderRight: 0 }}
//             >
//             { 
//                 routers.map((list, i) => (
//                 <Menu.Item key={ i }>
//                     <Link to={list.path}>{ list.name }</Link>
//                 </Menu.Item>
//                 ))

//             }
//             </Menu>
//           </Sider>
//         )
//     }
// }









const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} className="site-layout-background">
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

            { 
                routers.map((item, i) => (
                  item.children.map((list, i) => (
                    <Menu.Item key={ i+item.name }>
                        <Link to={list.path}>{ list.meta.title }</Link>
                    </Menu.Item>
                    ))
                  ))
            }
          </Menu>
        </Sider>
    );
  }
}