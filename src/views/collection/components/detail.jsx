import React, { useState, useEffect } from "react";
import { Drawer, Button, Form, Input, Select, Radio } from "antd";

const { Option } = Select;

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
      <Form.Item name="type" label="采集类型">
        <Select className="w150" defaultValue="0">
          {React.$enums.collectionType.map((item) => (
            <Option value={item.value}>{item.name}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="name" label="节点名称">
        <Input className=" input-sm" />
      </Form.Item>

      <Form.Item name="url" label="节点网址">
        <Input className=" input-sm" />
      </Form.Item>
    </>
  );
};

export default Detail;
