import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { withRouter } from "react-router-dom";
import Channel from "../../../../components/channel";

import { adminRouter } from "@/router";

import { connect } from "react-redux";
import dispatchToProps from "@/store/dispatch";
import Logo from "@/static/logo.png";

const _routers = adminRouter.filter((route) => route.sidebar);
const path = window.location.pathname.split("/")[2];

const ee = _routers.filter((route) => route.path === `/admin/${path}`);

if (ee.length === 0) {
  ee[0] = { module: "basic" };
}

const routers = _routers.filter((route) => route.module === ee[0].module);

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends React.Component {
  childrenRender = (siderRouter) => {
    return siderRouter.map((item, i) => {
      if (item.children) {
        return (
          <SubMenu
            key={i}
            icon={<i className={`iconfont icon-${item.icon}`}></i>}
            title={item.name}
          >
            {item.children.map((list, i) => (
              <Menu.Item key={i + item.name}>
                <Link to={list.path}>
                  {!this.props.screen ? list.name : ""}
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item
            key={i + 100}
            icon={<i className={`iconfont icon-${item.icon}`} />}
          >
            <Link to={item.path}>{!this.props.screen ? item.name : ""}</Link>
          </Menu.Item>
        );
      }
    });
  };

  SiderRender = (siderRouter) => {
    return siderRouter.map((item, i) => {
      if (
        (item.module === "article" ||
          item.module === "tech" ||
          item.module === "picture" ||
          item.module === "notes" ||
          item.module === "source") &&
        item.children
      ) {
        return this.childrenRender(item.children);
      } else {
        if (item.children) {
          return (
            <SubMenu
              key={i}
              icon={<i className={`iconfont icon-${item.icon} mr10`}></i>}
              title={!this.props.screen ? item.name : ""}
            >
              {item.children.map((list, i) => (
                <Menu.Item key={i + item.name}>
                  <Link to={list.path}>{list.name}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
          );
        } else {
          return (
            <Menu.Item
              key={i + 100}
              icon={<i className={`iconfont icon-${item.icon}`} />}
            >
              <Link to={item.path} onClick={this.onCloseChange}>
                {!this.props.screen ? item.name : ""}
              </Link>
            </Menu.Item>
          );
        }
      }
    });
  };

  rootSubmenuKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  state = {
    openKeys: [],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(
      (key) => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  onCloseChange = () => {
    this.setState({
      openKeys: [],
    });
  };

  render() {
    const siderRouter = _routers.filter(
      (route) => route.module === this.props.routes
    );

    return (
      <Sider collapsed={this.props.screen} className="site-layout-background">
        <div className="menus">TECHNOLOGY</div>

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
        >
          {this.SiderRender(siderRouter)}
        </Menu>
      </Sider>
    );
  }
}

const stateToProops = (state) => {
  return {
    list: state.login,
  };
};

export default withRouter(connect(stateToProops, dispatchToProps)(Sidebar));
