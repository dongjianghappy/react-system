import React from "react";
import { Card, Avatar } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import Reply from "./components/reply";
import { Status, WeCheckbox } from "@/components/index.js";
import { Operatinavbar } from "@/common";

const { reply, del, edit } = authorized.messageBoard;
const { messageBoard: coding } = codings;

class Index extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      api: "messageBoard",
      data: {
        page: 0,
        pagesize: 25,
        coding,
      },
      node: "messageBoard",
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { messageBoard } = this.props.module;
    return (
      <Card title="留言列表">
        <table width="100%" className="table-striped table-hover col-left-4">
          <tr className="th">
            <td className="col-md-1">选择</td>
            <td className="col-md-1">头像</td>
            <td className="col-md-1">用户名</td>
            <td className="col-md-5">留言内容</td>
            <td className="col-md-2">留言日期</td>
            <td className="col-md-1">状态</td>
            <td className="col-md-1">操作</td>
          </tr>
          {messageBoard &&
            messageBoard.map((item, index) => (
              <>
                <tr>
                  <td>
                    <WeCheckbox
                      data={{ id: item.id }}
                      {...this.props}
                    ></WeCheckbox>
                  </td>
                  <td>
                    <Avatar src={item.photos} />
                  </td>
                  <td>{item.nickname}</td>
                  <td>
                    {item.reply === "1" ? (
                      <span
                        style={{
                          backgroundColor: "#52c41a",
                          position: "relative",
                          top: "-1px",
                          display: "inline-block",
                          width: "6px",
                          height: "6px",
                          verticalAlign: "middle",
                          borderRadius: "50%",
                        }}
                      ></span>
                    ) : (
                      ""
                    )}
                    {item.content}
                  </td>
                  <td>{item.datetime}</td>
                  <td>
                    <Status
                      data={{ item, field: "checked", coding }}
                      authorized={checkButtonAuth("edit")}
                      {...this.props}
                    />
                  </td>
                  <td>
                    {item.reply === "1" ? (
                      "已回复"
                    ) : (
                      <Reply
                        name="回复"
                        data={{ item }}
                        authorized={checkButtonAuth("reply")}
                        renderList={this.getData}
                        {...this.props}
                      />
                    )}
                  </td>
                </tr>
              </>
            ))}
        </table>

        <Operatinavbar
          button={["all", "delete", "open", "close"]}
          data={{ list: module.checkedList, coding }}
          renderList={this.getData}
          checkButtonAuth={checkButtonAuth}
          authorized={authorized.partner}
          {...this.props}
        />
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.service,
  }),
  dispatchToProps
)(Index);
