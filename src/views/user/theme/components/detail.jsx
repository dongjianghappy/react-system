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
      <Form.Item name="name" label="名称" >
          <Input className=" input-sm" />
      </Form.Item>
      <Form.Item name="color" label="背景颜色" >
          <Input className=" input-sm input-100" />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="权限">
          <Input className=" input-sm input-100" />
      </Form.Item>
      <Form.Item name="grade_id" label="预览图" >
          <Input className=" input-sm input-100" />
      </Form.Item>             
      <Form.Item name="description" label="描述">
          <Input.TextArea />
      </Form.Item>
    </>
  );
};

export default Detail
