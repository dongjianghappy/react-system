import React from "react";
import { Form, Input } from "antd";

const Detail = (props) => {
  return (
    <>
      <Form.Item name="name" label="策略名称">
        <Input className=" input-sm" />
      </Form.Item>
      <Form.Item name="cycle" label="周期">
        <Input className=" input-sm input-100" />
      </Form.Item>
      <Form.Item name="integration" label="积分">
        <Input className=" input-sm" />
      </Form.Item>
      <Form.Item name="description" label="积分说明">
        <Input.TextArea />
      </Form.Item>
    </>
  );
};

export default Detail;
