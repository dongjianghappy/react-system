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
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let arr = this.props.location.pathname.split("/");
    let read = {};
    if (arr[arr.length - 1] === "unread") {
      read = { status: 0 };
    } else if (arr[arr.length - 1] === "read") {
      read = { status: 1 };
    }
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding,
        ...read,
      },
      node: "message",
    });
  };

  render() {
    const { message } = this.props.module;

    return (
      <Card>
        <div className="nav-title">系统消息</div>
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
                <td className={`col-md-10 ${item.status === "0" && "bold"}`}>
                  <span
                    onClick={() =>
                      this.props.history.push(
                        `/admin/service/message/detail?id=${item.id}`
                      )
                    }
                  >
                    {item.title}
                  </span>
                </td>
                <td className="col-md-1">
                  {item.status === "1" ? "已读" : "未读"}
                </td>
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
