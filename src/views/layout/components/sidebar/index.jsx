import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { adminRouter } from '../../../../router'

const { SubMenu } = Menu;
const { Sider } = Layout;
const routers = adminRouter.filter(route => route.isShow)

export default class Sidebar extends React.Component{
    
    render(){
        return(
            <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['0']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
            { 
                routers.map((list, i) => (
                <Menu.Item key={ i }>
                    <Link to={list.path}>{ list.name }</Link>
                </Menu.Item>
                ))

            }
            </Menu>
          </Sider>
        )
    }
}