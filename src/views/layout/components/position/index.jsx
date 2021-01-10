import React from "react";
import { Layout, Menu, Row, Col, Breadcrumb, Card, Tooltip } from "antd";
import { withRouter, Link } from "react-router-dom";
import Channel from "./components/channel";
import ChannelList from "../../../channel/components/channelList";

class Position extends React.Component {
  // 模块页面跳转后需要刷新，主要时显示左侧菜单栏
  route = (path, q = "") => {
    this.props.history.push(path);
    this.props.handle(q);
  };

  render() {
    return (
      <div
        style={{
          background: " #fff",
          padding: "12px",
          height: "45px",
          lineHeight: "25px !important",
          boxShadow: "0 1px 4px rgba(0, 21, 41, 0.08)",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Row>
          <Col span={12}>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span={12}>
            <Row justify="end" className="align_center">
              <Col
                span={2}
                onClick={() => this.route("/admin/appstore", "setting")}
                className="pointer"
              >
                <Tooltip placement="bottom" title="设置">
                  <i className="iconfont icon-shezhi font18" />
                </Tooltip>
              </Col>
              <Col span={2}>
                <Channel click={this.route} />
              </Col>
              <Col span={2}>
                <Tooltip placement="bottom" title="频道">
                  <ChannelList
                    click={this.route}
                    butName="频道"
                    title="频道"
                  ></ChannelList>
                </Tooltip>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(Position);
