import React from "react";
import { Card, Space, Tabs } from "antd";
import {
  connect,
  Link,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { WeModal, NavGroup } from "@/components";

import List from "./components/list";
import Detail from "./components/detail";

const { Nav } = NavGroup;
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
      <NavGroup
        extra={
          checkButtonAuth(add) ? (
            <WeModal.modalForm
              name="新增等级"
              data={{ coding }}
              renderList={this.getData}
              authorized={checkButtonAuth(add)}
              {...this.props}
            >
              <Detail />
            </WeModal.modalForm>
          ) : (
            ""
          )
        }
      >
        <Nav name="用户等级管理" value="1">
          <Card>
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
        </Nav>
      </NavGroup>
    );
  }
}

export default connect(
  (state) => ({
    module: state.user,
  }),
  dispatchToProps
)(UserGroup);
