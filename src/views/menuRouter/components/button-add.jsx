import React from "react";
import { Form, Input } from "antd";

const Forms = () => {
  return (
    <>
      <Form.Item name="name" label="按钮">
        <Input />
      </Form.Item>
      <Form.Item name="sort" label="顺序">
        <Input />
      </Form.Item>
      <Form.Item name="authority" label="权限">
        <Input />
      </Form.Item>
    </>
  );
};

export default Forms;
