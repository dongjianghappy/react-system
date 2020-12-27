import React from "react";
import { Card, Space, Button } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { WeCheckbox } from "@/components";

const { add, del, edit } = authorized.partner;
const { message: coding } = codings.service;

class ServiceMessage extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding,
      },
      node: "message",
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { message } = this.props.module;

    return (
      <Card title="系统消息">
        <table width="100%" className="table-striped col-left-2">
          {message &&
            message.map((item, index) => (
              <tr className="tr-list">
                <td className="col-md-1">
                  <WeCheckbox
                    data={{ id: item.id }}
                    {...this.props}
                  ></WeCheckbox>
                </td>
                <td className="col-md-10">{item.title}</td>
                <td className="col-md-1">{item.date_time}</td>
              </tr>
            ))}
        </table>

        <div className="mt25">
          <Space>
            <Button>删除消息</Button>
            <Button>标记已读</Button>
          </Space>
        </div>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.service,
  }),
  dispatchToProps
)(ServiceMessage);
