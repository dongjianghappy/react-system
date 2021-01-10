import React from "react";
import { Form, Input } from "antd";

const Detail = (props) => {
  return (
    <>
      <Form.Item name="name" label="名称" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
    </>
  );
};

export default Detail;
