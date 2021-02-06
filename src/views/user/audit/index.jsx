import React from "react";
import { Card, Tabs } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import EmailList from "./components/email-list";
import List from "./components/list";

const { TabPane } = Tabs;

class UserList extends React.Component {
  componentDidMount() {
    this.getData({
      register_checked: 0,
    });
  }

  getData = (data) => {
    this.props.dispatch.select({
      api: "userList",
      data: {
        ...data,
      },
      node: "audit",
    });
  };

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
      <Card>
        <Tabs defaultActiveKey="1">
          <TabPane tab="注册审核" key="1">
            <List
              type="1"
              data={audit}
              {...this.props}
              getData={() => this.getData(1)}
            />
          </TabPane>
          <TabPane tab="邮箱审核" key="2">
            <EmailList
              type="1"
              data={audit}
              {...this.props}
              getData={() => this.getData(1)}
            />
          </TabPane>
        </Tabs>
      </Card>
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
