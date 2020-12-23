import React from "react";
import { Card, Row, Col, Form, Input, Radio, Select, Button } from "antd";
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
const { Option } = Select;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 20 },
};

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
      <>
        <Card>
          <Form {...layout} labelAlign="left">
            <Form.Item label="用户名">东江</Form.Item>

            <Form.Item label="旧密码：">
              <Input
                placeholder="请输入旧密码"
                className="input-sm input-250"
              />
            </Form.Item>

            <Form.Item label="新密码：">
              <Input
                placeholder="请输入新密码"
                className="input-sm input-250"
              />
            </Form.Item>

            <Form.Item label="确认密码：">
              <Input
                placeholder="请输入确认密码"
                className="input-sm input-250"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </>
    );
  }
}

const stateToProops = (state) => {
  return {
    module: state.user,
  };
};

export default connect(stateToProops, dispatchToProps)(UserList);
