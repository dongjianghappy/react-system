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
const { Option } = Select;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 20 },
};

const Password = (props) => {
  return (
    <>
      <Form {...layout} labelAlign="left">
        <Form.Item label="用户名">东江</Form.Item>

        <Form.Item label="旧密码：">
          <Input placeholder="请输入旧密码" className="input-sm input-250" />
        </Form.Item>

        <Form.Item label="新密码：">
          <Input placeholder="请输入新密码" className="input-sm input-250" />
        </Form.Item>

        <Form.Item label="确认密码：">
          <Input placeholder="请输入确认密码" className="input-sm input-250" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Password;
