import React from "react";
import { Card } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { AsideGroup } from "@/components";
import UserList from "./components/userList";

const { Nav } = AsideGroup;
const { add, del, edit } = authorized.partner;
const { partner: coding } = codings;

class Index extends React.Component {
  componentDidMount() {
    this.getData({
      level: 0,
    });
  }

  getData = (params) => {
    this.props.dispatch.select({
      api: "userList",
      data: {
        page: 0,
        pagesize: 25,
        ...params,
      },
      node: "user",
    });
  };

  onChange = (params, key) => {
    this.getData({
      page: 0,
      pagesize: 25,
      ...params,
    });
  };

  render() {
    const { module } = this.props.module;
    return (
      <>
        <AsideGroup onChange={this.onChange}>
          <Nav
            name="普通用户"
            value="2"
            data={{
              level: 0,
            }}
          >
            <UserList
              title="普通用户"
              renderList={this.getData}
              coding={coding}
              {...this.props}
            />
          </Nav>
          <Nav
            name="高级用户"
            value="3"
            data={{
              level: 1,
            }}
          >
            <UserList
              title="高级用户"
              renderList={this.getData}
              coding={coding}
              {...this.props}
            />
          </Nav>
          <Nav
            name="管理员"
            value="4"
            data={{
              level: 2,
            }}
          >
            <UserList
              title="管理员"
              renderList={this.getData}
              coding={coding}
              {...this.props}
            />
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
