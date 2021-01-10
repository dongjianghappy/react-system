import React from "react";
import { Form, Input } from "antd";

const Detail = (props) => {
  return (
    <>
      <Form.Item name="quetion" label="问题">
        <Input className=" input-sm" />
      </Form.Item>
    </>
  );
};

export default Detail;
