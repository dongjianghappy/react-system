import React from "react";
import { Form, Input } from "antd";

export default (props) => {
  return (
    <>
      <Form.Item label="角色名称" name="name">
        <Input />
      </Form.Item>
    </>
  );
};
