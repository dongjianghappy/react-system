import React, { useState, useEffect } from "react";
import { Drawer, Button, Form, Input, Select, Radio } from "antd";

const Detail = (props) => {
  const [flagList, setFlagList] = useState([]);

  useEffect(() => {
    if (props.id) {
      props
        .fetch({
          api: "getFlag",
          data: {
            channel_id: 0,
          },
        })
        .then((res) => {
          setFlagList([...res.result]);
        });
    }
  }, []);

  return (
    <>
      <Form.Item name="name" label="名称">
        <Input className=" input-sm" />
      </Form.Item>
      <Form.Item name="sort" label="顺序">
        <Input className=" input-sm input-100" />
      </Form.Item>
      <Form.Item
        name="value"
        label="字段"
        rules={[{ required: true, message: "字段不能为空" }]}
      >
        <Input className=" input-sm input-100" />
      </Form.Item>
      <Form.Item name="type" label="类型">
        <Radio.Group>
          <Radio value={1}>应用</Radio>
          <Radio value={0}>功能</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="description" label="说明">
        <Input.TextArea />
      </Form.Item>
    </>
  );
};

export default Detail;
