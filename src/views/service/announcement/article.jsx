import React, { useState } from "react";
import { Form, Input, InputNumber, Radio, Select } from "antd";
import { Editor } from "@/components";
const { Option } = Select;
const Detail = (props) => {
  const { dataSource, callback } = props;
  const { announcementType } = React.$enums;
  return (
    <>
      <Form.Item name="title" label="伙伴名称">
        <Input />
      </Form.Item>
      <Form.Item name="sort" label="顺序">
        <InputNumber />
      </Form.Item>
      <Form.Item name="type" label="类型">
        <Select className="w150" defaultValue="1">
          {announcementType.map((item) => (
            <Option value={item.value}>{item.name}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="status" label="显示">
        <Radio.Group>
          <Radio value="1" defaultChecked>
            是
          </Radio>
          <Radio value="0">否</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="内容" name="content">
        <Editor value={dataSource.content} callback={callback} />
      </Form.Item>
    </>
  );
};

export default Detail;
