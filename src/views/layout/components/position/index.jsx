import React from "react";
import { Row, Col, Tooltip } from "antd";
import { withRouter } from "react-router-dom";
import Channel from "./components/channel";
import ChannelList from "../../../channel/components/channelList";
import { Breadcrumb } from "@/router";

class Position extends React.Component {
  state = {
    pathArr: ["/admin/manage", "/admin/function"],
  };

  // 模块页面跳转后需要刷新，主要时显示左侧菜单栏
  route = (path, q = "") => {
    this.props.history.push(path);
    this.props.handle(q);
  };

  itemRender = (Breadcrumb) => {
    // 获取当前路径下相关对象
    const pathname = Breadcrumb.filter(
      (route) => route.path === this.props.location.pathname
    );

    // 如果当前对象由节点则进行分割，否则分割路径
    const arr =
      pathname.length > 0 && pathname[0].node
        ? pathname[0].node.split("/")
        : this.props.location.pathname.split("/");

    arr.shift();
    const arrs = [];
    let path = "";

    for (let i = 0; i < arr.length; i++) {
      path += `/${arr[i]}`;
      for (let j = 0; j < Breadcrumb.length; j++) {
        if (Breadcrumb[j].path === path || Breadcrumb[j].node === path) {
          arrs.push({
            path: Breadcrumb[j].path,
            name: Breadcrumb[j].name,
            disabled: Breadcrumb[j].disabled,
          });

          break;
        }
      }
    }

    return (
      <>
        {arrs.map((item, index) => (
          <>
            {arrs.length > 1 && index === 0 ? (
              <span
                key={index}
                onClick={() => this.props.history.push(item.path)}
              >
                {item.name}
              </span>
            ) : (
              <>
                {index !== 0 ? <span className="plr5">{">"}</span> : ""}
                <span
                  key={index}
                  onClick={() =>
                    item.disabled === "true"
                      ? this.props.history.push(item.path)
                      : ""
                  }
                >
                  {item.name}
                </span>
              </>
            )}
          </>
        ))}
      </>
    );
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
          <Col span={12} className="pl15">
            {this.itemRender(Breadcrumb)}
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
