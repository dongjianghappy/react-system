import React from "react";
import { Form, Input, Radio } from "antd";

const Detail = (props) => {
  return (
    <>
      <Form.Item name={["user", "name"]} label="标题">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "email"]} label="序号">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "name"]} label="链接">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "website"]} label="状态">
        <Radio value={1}>开启</Radio>
        <Radio value={0}>关闭</Radio>
      </Form.Item>
      <Form.Item name={["user", "name"]} label="图片">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "website"]} label="说明">
        <Input.TextArea />
      </Form.Item>
    </>
  );
};

export default Detail;
