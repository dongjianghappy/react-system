import React from "react";
import { Card, Tabs } from "antd";
import {
  connect,
  Link,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { WeCheckbox, NavGroup } from "@/components";
import EmailList from "./components/email-list";
import List from "./components/list";

const { Nav } = NavGroup;

class UserList extends React.Component {
  getData = (data) => {
    this.props.dispatch.select({
      api: "userList",
      data: {
        ...data,
      },
      node: "audit",
    });
  };

  componentDidMount() {
    this.getData({
      register_checked: 0,
    });
  }

  callback = (key) => {
    if (key === "1") {
      this.getData({
        register_checked: 0,
      });
    } else if (key === "2") {
      this.getData({
        email_checked: 1,
      });
    }
  };

  render() {
    const { audit } = this.props.module;
    return (
      <NavGroup onChange={this.callback}>
        <Nav name="积分设置" value="1">
          <Card>
            <List
              type="1"
              data={audit}
              {...this.props}
              getData={() => this.getData(1)}
            />
          </Card>
        </Nav>
        <Nav name="积分设置" value="2">
          <Card>
            <EmailList
              type="1"
              data={audit}
              {...this.props}
              getData={() => this.getData(1)}
            />
          </Card>
        </Nav>
      </NavGroup>
    );
  }
}

const stateToProops = (state) => {
  return {
    global: state.common.global,
    state,
    module: state.user,
  };
};

export default connect(stateToProops, dispatchToProps)(UserList);
