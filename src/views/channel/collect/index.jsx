import React from "react";
import { Card, Row, Col } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  getQuery,
  channel,
} from "@/utils";

import { WeCheckbox, R_pagination } from "@/components";

const mod = window.location.pathname.split("/")[2] || "";
const { add, del, edit } = authorized.announcement;
const { art: coding } = codings[mod];

class Collect extends React.Component {
  state = {
    params: {},
  };

  componentDidMount() {
    this.setState(
      {
        params: getQuery(),
        coding: codings[this.props.channel.module],
      },
      () => {
        this.getData();
      }
    );
  }

  getData = () => {
    this.props.dispatch.select({
      api: "collect",
      data: {
        page: 0,
        pagesize: 25,
        coding,
      },
      node: `${this.props.channel.module}.collect`,
    });
  };

  render() {
    const { collect } = this.props.module;

    return (
      <>
        <Card>
          <div className="nav-title">收藏文档</div>
          <table
            width="100%"
            class="table-striped table-hover artlist col-left-23"
          >
            <tr class="th">
              <td class="col-md-1">选择</td>
              <td class="col-md-4">评论资源</td>
              <td class="col-md-4">内容</td>
              <td class="col-md-1">时间</td>
              <td class="col-md-1">操作</td>
            </tr>
            {collect &&
              collect.map((item, index) => (
                <tr className="tr-list">
                  <td>
                    <WeCheckbox
                      data={{ id: item.id }}
                      {...this.props}
                    ></WeCheckbox>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.content}</td>
                  <td>{item.times}</td>
                  <td>{item.date_time}</td>
                </tr>
              ))}
          </table>

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
    module: state.channel[channel().module],
    channel: channel(),
  }),
  dispatchToProps
)(Collect);
