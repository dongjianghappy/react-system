import React from "react";
import { Form, Input } from "antd";

const Detail = (props) => {
  return (
    <>
      <Form.Item name="reason_type" label="类型">
        <Input className=" input-sm" />
      </Form.Item>
      <Form.Item name="return_reason" label="说明">
        <Input.TextArea />
      </Form.Item>
    </>
  );
};

export default Detail;
