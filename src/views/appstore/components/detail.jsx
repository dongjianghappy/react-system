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
      <Form.Item name="name" label="应用名称" >
          <Input className=" input-sm" />
      </Form.Item>
      <Form.Item name="sort" label="顺序" >
          <Input className=" input-sm input-100" />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="状态">
          <Radio value={1}>开启</Radio>
          <Radio value={0}>关闭</Radio>
      </Form.Item>
      <Form.Item name="grade_id" label="应用权限" >
          <Input className=" input-sm input-100" />
      </Form.Item>
      <Form.Item name="module" label="模块名称">
          <Input className=" input-sm input-100" />
      </Form.Item>
      <Form.Item name="url" label="应用链接">
          <Input className=" input-sm" />
      </Form.Item>                
      <Form.Item name="description" label="功能说明">
          <Input.TextArea />
      </Form.Item>
    </>
  );
};

export default Detail
