import React from "react";
import { Layout, Menu, Row, Col, Dropdown, message, Input, Badge } from "antd";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "@/static/header.css";

const { Header } = Layout;

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
              <Link
                onClick={() => route("/admin/service/message", "service")}
                className="absolute"
                style={{ top: "6px" }}
              >
                <Badge count={5}>
                  <i className="iconfont icon-email font24"></i>
                </Badge>
              </Link>
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
    </Header>
  );
};

export default withRouter(Index);
