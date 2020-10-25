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


 const Index = function (props) {
    const route = (path) => {
      props.history.push(path)
      window.location.reload()
  }

    return(
        <Header className="header">
        <div className="logo" onClick={() => route('/admin')}>
          <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" width="25" style={{marginRight: 10}} />
          管理控制平台</div>

          <div className="header-wrap">
          <div className="header-left">
          <Row>
            <Col style={{color: "#fff"}}>
              图片空间
            </Col>
          </Row>
          </div>
        </div>
      </Header>
    )
}

export default withRouter(Index)