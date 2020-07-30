import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Row, Col, Dropdown, Breadcrumb, message, Space, Input } from 'antd';
// import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { clearToken } from '../../../../utils/auth'
import '../../../../static/header.css'

const { SubMenu } = Menu;
const { Header } = Layout;
const { Search } = Input;


// class Index extends React.Component {

  
//   render() {
//     console.log(this.props.collapsed);
//     return (
//       <div style={{ width: 256 }}>
//         <Button type="primary" onClick={() => this.props.toggleCollapsed()} style={{ marginBottom: 16 }}>
//           {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
//         </Button>
        
//       </div>
//     );
//   }
// }









 const Index = function (props) {

    const menu = (
      <Menu onClick={(p) => {
        if(p.key === "loginOut"){
          clearToken()
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

    const route = (path) => {
      props.history.push(path)
      window.location.reload()
  }

    return(
        <Header className="header">
        <div className="logo" onClick={() => route('/admin')}>管理控制平台</div>
        <div className="header-wrap">
          <div className="header-left">
          <Row>
            <Col>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="menu">
              <Menu.Item key="1"><Link to="/admin/basic">基本</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/admin/navigation">导航</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/admin/sucai" >素材</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/admin/todolist" >测试</Link></Menu.Item>
            </Menu>
            </Col>
            <Col><Search placeholder="站内搜索" /></Col>
          </Row>
          </div>
          <div className="header-right">
            <Dropdown overlay={menu} className="dropDwon">
              <div>
                <img src="http://127.0.0.1//user/110506372/photos/110506372.png" alt="" style={{ marginRight: 5, width: 25, height: 25, borderRadius: '50%'}} />
                <span>超级管理员</span>
              </div>
            </Dropdown>
            <Space>
            <Row>
              <Col>风格</Col>
              <Col>消息</Col>
              <Col>首页</Col>
            </Row>
            </Space>
          </div>
        </div>

        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="menu">
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
          </Dropdown> */}
      </Header>
    )
}

export default withRouter(Index)