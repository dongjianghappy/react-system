import React from "react";
import { Card, Tabs } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
// import UserList from "./components/userList";
import Personal from "./components/personal";
import Password from "./components/password";
import { Confirm, WeCheckbox, WeDrawer, AsideGroup } from "@/components";

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
          <Nav name="个人资料" icon="111" value="1">
            <Card title="个人资料" bordered={false}>
              <Personal />
            </Card>
          </Nav>

          <Nav name="修改密码" value="2">
            <Card title="修改密码" bordered={false}>
              <Password />
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
