import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { withRouter } from "react-router-dom";
import Channel from "../../../../components/channel";

import { adminRouter } from "@/router";

import { connect } from "react-redux";
import dispatchToProps from "@/store/dispatch";
import Logo from "@/static/logo.png";

const _routers = adminRouter.filter((route) => route.isShow);
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
            icon={<i className={`iconfont icon-${item.icon} mr10`}></i>}
            title={item.name}
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
          <Menu.Item key={i + 100}>
            <i className={`iconfont icon-${item.icon} mr10`}></i>
            <Link to={item.path}>{item.name}</Link>
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
              title={item.name}
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
            <Menu.Item key={i + 100}>
              <i className={`iconfont icon-${item.icon} mr10`}></i>
              <Link to={item.path} onClick={this.onCloseChange}>
                {item.name}
              </Link>
            </Menu.Item>
          );
        }
      }

      // item.module === "article" ?

      // <SubMenu key="0" title="基本信息">
      //     <Menu.Item ><Link to="/admin/article">频道设置</Link></Menu.Item>
      //     <Menu.Item ><Link to={{pathname:'/admin/navigation/main', state:{id: item.id}}}>频道导航</Link></Menu.Item>
      //     <Menu.Item ><Link to={{pathname:'/admin/navigation/single', state:{id: item.id}}}>单页管理</Link></Menu.Item>
      //     <Menu.Item ><Link to={{pathname:'/admin/article/label', state:{id: item.id}}}>聚合标签</Link></Menu.Item>
      //     <Menu.Item ><Link to={{pathname:'/admin/navigation/single', state:{id: item.id}}}>语言设置</Link></Menu.Item>
      // </SubMenu>

      // :

      // item.children ? //  && item.child !== 0
      // <SubMenu key={i} icon={<UserOutlined />} title={item.name}>
      // {
      //     item.children.map((list, i) => (
      //     <Menu.Item key={ i+item.name }>
      //         <Link to={list.path}>{ list.name }</Link>
      //     </Menu.Item>
      //     ))
      // }
      // </SubMenu>
      // :
      // <Menu.Item key={ i+100 }>
      //     <Link to={item.path}>{ item.name }</Link>
      // </Menu.Item>
    });
  };

  rootSubmenuKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  state = {
    openKeys: [],
  };

  onOpenChange = (openKeys) => {
    debugger;
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
    debugger;
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
  console.log(state);
  return {
    list: state.login,
  };
};

export default withRouter(connect(stateToProops, dispatchToProps)(Sidebar));
