import React from "react";
import { Card, Space } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { WeModal } from "@/components";
import Detail from "./components/detail";

const { add, edit } = authorized.user.group;
const { group: coding } = codings.user;

class UserGroup extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding,
      },
      node: "group",
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { group } = this.props.module;
    return (
      <Card
        title="用户等级管理"
        extra={
          checkButtonAuth(add) && (
            <WeModal.modalForm
              name="新增等级"
              data={{ coding }}
              renderList={this.getData}
              authorized={checkButtonAuth(add)}
              {...this.props}
            >
              <Detail />
            </WeModal.modalForm>
          )
        }
      >
        <table width="100%" class="table-striped table-hover col-left-4">
          <tr class="th">
            <td class="col-md-1">等级</td>
            <td class="col-md-2">等级图标</td>
            <td class="col-md-1">登录天数</td>
            <td class="col-md-7">描述</td>
            <td class="col-md-1">操作</td>
          </tr>
          {group &&
            group.map((item, index) => (
              <tr>
                <td>{item.level}</td>
                <td>{item.level_icon}</td>
                <td>{item.time}</td>
                <td>{item.description}</td>
                <td>
                  <Space size="middle">
                    <WeModal.modalForm
                      name="编辑等级"
                      action="edit"
                      data={{ id: item.id, coding }}
                      renderList={this.getData}
                      authorized={checkButtonAuth(edit)}
                      {...this.props}
                    >
                      <Detail />
                    </WeModal.modalForm>
                  </Space>
                </td>
              </tr>
            ))}
        </table>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.user,
  }),
  dispatchToProps
)(UserGroup);
