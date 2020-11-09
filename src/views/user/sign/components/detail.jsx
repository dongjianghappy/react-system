import React, { useState, useEffect } from 'react';
import { Drawer, Button, Form, Input, Select, Radio } from 'antd';



const Detail = (props) => {

  const [flagList, setFlagList] = useState([]);

 
  useEffect(() => {
    if(props.id){
      props.fetch({
        api: "getFlag",
        data: {
          channel_id: 0
        }          
      }).then((res) => {
        setFlagList([...res.result])
      })
    }
  }, [])

  return (
    <>
      <Form.Item name="name" label="策略名称" >
          <Input className=" input-sm" />
      </Form.Item>
      <Form.Item name="cycle" label="周期" >
          <Input className=" input-sm input-100" />
      </Form.Item>
      <Form.Item name="integration" label="积分" >
          <Input className=" input-sm" />
      </Form.Item>
      <Form.Item name="description" label="积分说明" >
          <Input.TextArea/>
      </Form.Item>
    </>
  );
};

export default Detail
