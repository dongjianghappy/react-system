import React from "react";
import { Form, Input, Select } from "antd";

const { Option } = Select;

const Detail = (props) => {
  const { textType } = React.$enums;

  return (
    <>
      <Form.Item name="remark" label="参数名">
        <Input />
      </Form.Item>
      <Form.Item name="name" label="字段名">
        <Input />
      </Form.Item>
      <Form.Item name="value" label="参数值">
        <Input />
      </Form.Item>
      <Form.Item name="text_type" label="文本类型">
        <Select placeholder="Please select a country">
          {textType.map((item) => (
            <Option value={item.value}>{item.name}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="explanation" label="说明">
        <Input.TextArea />
      </Form.Item>
    </>
  );
};

export default Detail;
