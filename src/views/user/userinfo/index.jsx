import React from "react";
import { Card, Tabs } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { Confirm, WeCheckbox, WeDrawer, AsideGroup } from "@/components";
import Default from "./components/default";
import UserList from "./components/userList";

const { Nav } = AsideGroup;
const { add, del, edit } = authorized.partner;
const { partner: coding } = codings;
const { TabPane } = Tabs;

class Index extends React.Component {
  componentDidMount() {
    // this.getData({
    //   level: 0,
    // });
  }

  getData = (params) => {
    this.props.dispatch.select({
      api: "userList",
      data: {
        ...params,
      },
      node: "user",
    });
  };

  onChange = (key) => {
    switch (key) {
      case "2":
        this.getData({
          level: 0,
        });
        break;
      case "3":
        this.getData({
          level: 1,
        });
        break;
      case "4":
        this.getData({
          level: 2,
        });
        break;
      default:
    }
  };

  render() {
    const { user } = this.props.module;
    return (
      <>
        <AsideGroup onChange={this.onChange}>
          <Nav name="用户信息" icon="111" value="1">
            <Card title="用户信息" bordered={false}>
              <Default />
            </Card>
          </Nav>

          <Nav name="普通用户" value="2">
            <Card title="普通用户" bordered={false}>
              <UserList
                dataSource={user}
                renderList={this.getData}
                coding={coding}
                {...this.props}
              />
            </Card>
          </Nav>
          <Nav name="高级用户" value="3">
            <Card title="高级用户" bordered={false}>
              <UserList
                dataSource={user}
                renderList={this.getData}
                coding={coding}
                {...this.props}
              />
            </Card>
          </Nav>
          <Nav name="管理员" icon="111" value="4">
            <Card title="管理员" bordered={false}>
              <UserList
                dataSource={user}
                renderList={this.getData}
                coding={coding}
                {...this.props}
              />
            </Card>
          </Nav>
        </AsideGroup>
      </>
    );
  }
}

export default connect(
  (state) => ({
    module: state.user,
  }),
  dispatchToProps
)(Index);
