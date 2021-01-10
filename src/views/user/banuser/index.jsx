import React from "react";
import { Card, Avatar } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import { WeCheckbox } from "@/components";

const { remove } = authorized.user.banuser;
const { banuser: coding } = codings.user;

class Banuser extends React.Component {
  componentDidMount() {
    this.props.dispatch.select({
      api: "userList",
      node: "banuser",
    });
  }

  render() {
    const { banuser } = this.props.module;
    return (
      <Card title="用户禁言">
        <table width="100%" className="table-striped table-hover col-left-7">
          <tr class="th">
            <td class="col-md-1">选择</td>
            <td class="col-md-1">头像</td>
            <td class="col-md-2">用户名</td>
            <td class="col-md-1">禁言类型</td>
            <td class="col-md-1">禁言天数</td>
            <td class="col-md-4">禁言原因</td>
            <td class="col-md-1">禁言时间</td>
            <td class="col-md-1">解禁</td>
          </tr>
          {banuser &&
            banuser.map((item, index) => (
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
                <td>移除</td>
                <td></td>
                <td></td>
                <td></td>
                <td>解禁</td>
              </tr>
            ))}
        </table>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.partner,
  }),
  dispatchToProps
)(Banuser);
