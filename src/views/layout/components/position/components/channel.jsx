import React from "react";
import { Drawer, Row, Col, Tooltip } from "antd";

import { withRouter } from "react-router-dom";

import { connect, dispatchToProps } from "@/utils";

import { channelInfo } from "@/utils/auth";
import "@/Global.less";

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
    const qqqq = channelInfo() || [];
    return (
      <>
        <span onClick={this.showDrawer}>
          <Tooltip placement="bottom" title="频道">
            <i className="iconfont icon-app pointer"></i>
          </Tooltip>
        </span>

        <Drawer
          placement="right"
          style={{ top: 63 }}
          width={650}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ padding: 10 }}
        >
          <div className="channel-wrap">
            {qqqq.map((item, index) => (
              <div
                key={index}
                className="channel-lists"
                onClick={() => this.handel(item.module)}
              >
                <i className="iconfont icon-list" />
                {item.name}
              </div>
            ))}
          </div>
        </Drawer>
      </>
    );
  }
}

export default withRouter(
  connect((state) => ({}), dispatchToProps)(ChannelList)
);
