import React from "react";
import { Drawer, Button, Row, Col, Card } from "antd";

import { adminRouter } from "../../../router";
import { withRouter } from "react-router-dom";
import ChannelForm from "./channelForm";
import { checkButtonAuth, channelInfo } from "@/utils/auth";

const { Meta } = Card;

class ChannelList extends React.Component {
  state = { visible: false, childrenDrawer: false };

  formRef = React.createRef();

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

  handel = (path) => {
    this.setState({
      visible: false,
    });
    this.props.click("/admin/" + path, path);
  };

  render() {
    const { module } = React.$enums;
    const routers = module.filter((route) => route.type === "plate");
    const channel = module.filter((route) => route.type === "channel");
    const { title, type, width } = this.props;
    return (
      <>
        <span onClick={this.showDrawer}>
          <i className="iconfont icon-navicon font24 pointer" />
        </span>

        <Drawer
          placement="right"
          style={{ top: 63 }}
          width={200}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {this.props.children}
          <ul className="navigation">
            {routers.map((list, i) =>
              list.value === "space" ? (
                <li>
                  <a href="/admin/space" target="_blank">
                    <i className={`iconfont icon-${list.icon} mr10`}></i>
                    {list.name}
                  </a>
                </li>
              ) : (
                <li
                  key={i}
                  className="font16"
                  onClick={() => this.handel(list.value)}
                >
                  <i className={`iconfont icon-${list.icon} mr10`}></i>
                  {list.name}
                </li>
              )
            )}
          </ul>
        </Drawer>
      </>
    );
  }
}

export default withRouter(ChannelList);
