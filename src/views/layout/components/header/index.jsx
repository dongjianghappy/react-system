import React from "react";
import {
  Layout,
  Menu,
  Row,
  Col,
  Dropdown,
  message,
  Input,
  Popover,
} from "antd";
import { connect, dispatchToProps } from "@/utils";
import { Badge } from "@/components";
import { withRouter } from "react-router-dom";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "@/static/header.css";

const { Header } = Layout;
const { Search } = Input;
const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
class Index extends React.Component {
  componentDidMount() {
    this.props.dispatch
      .fetch({
        api: "Detect",
      })
      .then((res) => {
        sessionStorage.setItem("channel", JSON.stringify(res.result.channel));
        sessionStorage.setItem("menuList", JSON.stringify(res.result.menuList));
      });
    this.getData();
  }

  getData = () => {
    this.props.dispatch.getDetail({
      api: "systemMessage",
      node: "system",
    });
  };

  menu = (
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
      <Menu.Item key="loginOut">退出</Menu.Item>
    </Menu>
  );

  route = (path, q = "") => {
    this.props.history.push(path);
    this.props.handle(q);
  };

  search = (data) => {
    this.props.dispatch.getSearch({
      data: {
        search: data,
      },
    });

    this.props.history.push("/admin/search/index");
  };
  render() {
    const { system } = this.props.module;
    return (
      <Header className="header">
        <div className="logo" onClick={() => this.route("/admin", "basic")}>
          <img
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            width="25"
            style={{ marginRight: 10 }}
          />
          控制平台
        </div>
        <div className="header-wrap">
          <div className="header-left">
            <Row>
              <Col className="pl15">
                <span
                  className="font20 cl-white"
                  onClick={() => this.props.onScreens()}
                >
                  {this.props.screen ? (
                    <MenuUnfoldOutlined />
                  ) : (
                    <MenuFoldOutlined />
                  )}
                </span>
              </Col>
              <Col span={6} offset={1}>
                <Search placeholder="站内搜索" onSearch={this.search} />
              </Col>
            </Row>
          </div>
          <div className="header-right">
            <Row>
              <Col span="8">
                <Dropdown
                  overlay={this.menu}
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
                <span
                  onClick={() =>
                    this.route("/admin/service/message", "service")
                  }
                >
                  消息
                  <Badge num={system.message} />
                </span>
                {/* <span
                  onClick={() =>
                    this.route("/admin/service/message", "service")
                  }
                  className="absolute"
                  style={{ top: "6px" }}
                >
                  <Badge count={5}>
                    <i className="iconfont icon-email font24"></i>
                  </Badge>
                </span> */}
              </Col>
              <Col span="10">
                <Row>
                  <Col span="12">风格</Col>
                  <Col span="12">
                    <a href="http://www.yunxi10.com" target="_blank">
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
  }
}

export default withRouter(
  connect((state) => ({ module: state.common }), dispatchToProps)(Index)
);
