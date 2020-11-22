import React from "react";
import { Card, Row, Col } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { WeCheckbox, R_pagination } from "@/components";

const mod = window.location.pathname.split("/")[2] || "";
const { add, del, edit } = authorized.announcement;
const { art: coding } = codings[mod];

class Download extends React.Component {
  componentDidMount() {
    this.props.dispatch.select({
      api: "download",
      data: {
        page: 0,
        pagesize: 25,
      },
      node: "download",
    });
  }

  render() {
    const { download } = this.props.module;

    return (
      <>
        <Card title="下载管理">
          <table
            width="100%"
            class="table-striped table-hover artlist col-left-23"
          >
            <tr class="th">
              <td class="col-md-1">选择</td>
              <td class="col-md-2">用户</td>
              <td class="col-md-6">内容</td>
              <td class="col-md-1">下载时间</td>
              <td class="col-md-1">操作</td>
            </tr>
            {download &&
              download.map((item, index) => (
                <tr className="tr-list">
                  <td>
                    <WeCheckbox
                      data={{ id: item.id }}
                      {...this.props}
                    ></WeCheckbox>
                  </td>
                  <td>{item.nickname}</td>
                  <td>{item.title}</td>
                  <td>{item.times}</td>
                  <td>{item.date_time}</td>
                </tr>
              ))}
          </table>

          <table width="100%" className="table-striped col-left-12"></table>

          <Row>
            <Col span={24} style={{ textAlign: "right" }}>
              {/* <R_pagination
                data={this.props.module}
                select={this.props.select}
                api="comment"
                coding="A0000"
              /> */}
            </Col>
          </Row>
        </Card>
      </>
    );
  }
}

export default connect(
  (state) => ({
    module: state.channel,
  }),
  dispatchToProps
)(Download);
