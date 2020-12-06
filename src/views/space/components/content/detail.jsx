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
      <Form.Item name="filename" label="文件夹名">
        <Input className=" input-sm" />
      </Form.Item>
    </>
  );
};

export default Detail;
