import React from "react";
import { Card, Row, Col } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  getQuery,
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
    const mod = window.location.pathname.split("/")[2] || "";

    this.setState(
      {
        params: getQuery(),
        coding: codings[mod],
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
      node: "collect",
    });
  };

  render() {
    const { collect } = this.props.module;

    return (
      <>
        <Card title="收藏文档">
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
    module: state.channel,
  }),
  dispatchToProps
)(Collect);
