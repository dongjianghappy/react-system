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
