import React from "react";
import { Card, Avatar } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  datetime,
} from "@/utils";

import { Status, Confirm, WeCheckbox, WeDrawer } from "@/components";
import { Operatinavbar } from "@/common";

const { del, edit } = authorized.feedback;
const { feedback: coding } = codings;

class Index extends React.Component {
  state = {
    request: {
      ...this.props.common.global.initPage,
    },
  };

  getData = (data) => {
    this.props.dispatch.select({
      api: "feedback",
      data: {
        coding,
        ...this.state.request,
        ...data,
      },
      node: "feedback",
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { feedback } = this.props.module;
    return (
      <Card>
        <div className="nav-title">意见反馈列表</div>
        <table width="100%" className="table-striped table-hover col-left-23">
          <tr className="th">
            <td className="col-md-1">选择</td>
            <td className="col-md-2">用户</td>
            <td className="col-md-5">反馈内容</td>
            <td className="col-md-2">反馈日期</td>
            <td className="col-md-1">状态</td>
            <td className="col-md-1">操作</td>
          </tr>
          {feedback &&
            feedback.map((item, index) => (
              <tr>
                <td>
                  <WeCheckbox
                    data={{ id: item.id }}
                    {...this.props}
                  ></WeCheckbox>
                </td>
                <td>
                  <Avatar src={item.photos} className="mr10" />
                  {item.nickname}
                </td>

                <td>{item.content}</td>
                <td>{datetime(item.datetime)}</td>
                <td>
                  <Status
                    data={{ item, field: "checked", coding }}
                    authorized={checkButtonAuth("edit")}
                    {...this.props}
                  />
                </td>
                <td>
                  <Confirm
                    name="删除"
                    config={{
                      operating: "delete",
                      message: React.$modalEnum,
                    }}
                    data={{ coding, id: item.id }}
                    api="delete"
                    renderList={this.getData}
                    authorized={checkButtonAuth("delete")}
                    {...this.props}
                  />
                </td>
              </tr>
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
    common: state.common,
    module: state.service,
  }),
  dispatchToProps
)(Index);
