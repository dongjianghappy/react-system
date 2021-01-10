import React from "react";
import { Drawer, Row, Col, Tooltip } from "antd";

import { withRouter } from "react-router-dom";

import { connect, dispatchToProps } from "@/utils";

import { channelInfo } from "@/utils/auth";

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
          title="频道"
          placement="right"
          style={{ top: 63 }}
          width={650}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Row>
            {qqqq.map((item, index) => (
              <Col span={6} className="channel-list">
                <div className="m5 align_center p0">
                  <img
                    src={item.image}
                    style={{ width: "100%", height: 80 }}
                    onClick={() => this.handel(item.module)}
                  />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>{item.name}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Drawer>
      </>
    );
  }
}

export default withRouter(
  connect((state) => ({}), dispatchToProps)(ChannelList)
);
