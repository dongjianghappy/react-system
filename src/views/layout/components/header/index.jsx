import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {
  Layout,
  Menu,
  Row,
  Col,
  Dropdown,
  Breadcrumb,
  message,
  Space,
  Input,
  Badge,
} from "antd";
// import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { clearToken } from "../../../../utils/auth";

import "../../../../static/header.css";

const { SubMenu } = Menu;
const { Header } = Layout;
const { Search } = Input;

const Index = function (props) {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

  const menu = (
    <Menu
      onClick={(p) => {
        if (p.key === "loginOut") {
          sessionStorage.clear();
          window.location.href = "/login";
        } else {
          message.info(p.k);
        }
      }}
      className="p15"
    >
      <Menu.Item key="tongzhi">通知中心</Menu.Item>
      <Menu.Item key="setting">设置</Menu.Item>
      <Menu.Item key="loginOut">退出</Menu.Item>
    </Menu>
  );

  const route = (path, q = "") => {
    props.history.push(path);
    props.handle(q);
  };

  return (
    <Header className="header">
      <div className="logo" onClick={() => route("/admin", "basic")}>
        <img
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          width="25"
          style={{ marginRight: 10 }}
        />
        管理控制平台
      </div>
      <div className="header-wrap">
        <div className="header-left">
          <Row>
            <Col>
              <span
                className="font20 cl-white"
                onClick={() => props.onScreens()}
              >
                {props.screen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </span>
              {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="menu">
              <Menu.Item><Link to="/admin/basic">基本</Link></Menu.Item>
              <Menu.Item><Link to="/admin/navigation">导航</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/admin/sucai" >素材</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/admin/todolist" >测试</Link></Menu.Item>
            </Menu> */}
            </Col>
            <Col
              offset={1}
              className="font18 cl-white"
              onClick={() => route("/admin", "basic")}
            >
              07素材网管理平台
            </Col>
            <Col offset={3}>
              <Search placeholder="站内搜索" />
            </Col>
          </Row>
        </div>
        <div className="header-right">
          <Row>
            <Col span="8">
              <Dropdown
                overlay={menu}
                className=""
                placement="bottomCenter"
                arrow
              >
                <div>
                  <img
                    src={userInfo && userInfo.photos}
                    alt=""
                    style={{
                      marginRight: 5,
                      width: 25,
                      height: 25,
                      borderRadius: "50%",
                    }}
                  />
                  <span>{userInfo && userInfo.nickname}</span>
                </div>
              </Dropdown>
            </Col>
            <Col span="6">
              <a
                onClick={() => route("/admin/service/message", "service")}
                className="absolute"
                style={{ top: "6px" }}
              >
                <Badge count={5}>
                  <i className="iconfont icon-email font24"></i>
                </Badge>
              </a>
            </Col>
            <Col span="10">
              <Row>
                <Col span="8">风格</Col>
                <Col span="8">
                  <a href="http://127.0.0.1" target="_blank">
                    首页
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
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
  );
};

export default withRouter(Index);
