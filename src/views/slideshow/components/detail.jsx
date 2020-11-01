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
      <Form.Item name={['user', 'name']} label="名称" rules={[{ required: true }]}>
          <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="显示频道" rules={[{ type: 'email' }]}>
          
      </Form.Item>
      <Form.Item name={['user', 'website']} label="状态">
          <Radio value={1}>开启</Radio>
          <Radio value={0}>关闭</Radio>
      </Form.Item>
      <Form.Item name={['user', 'name']} label="宽度" rules={[{ required: true }]}>
          <Input />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="高度">
          <Input />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="滑动方向">
          <Radio value={1}>向左滑动</Radio>
          <Radio value={0}>向右滑动</Radio>
          <Radio value={1}>向上滑动</Radio>
          <Radio value={0}>向下滑动</Radio>
          <Radio value={0}>淡入浅出</Radio>
      </Form.Item>                

      <Form.Item name={['user', 'website']} label="焦点位置">
          <Input style={{width: 100}} />(right)
          <Input style={{width: 100}} />(bottom)
      </Form.Item>
      <Form.Item name={['user', 'name']} label="时间" rules={[{ required: true }]}>
      <Input style={{width: 100}} />(毫秒)
      </Form.Item>
      <Form.Item name={['user', 'website']} label="速度">
      <Input style={{width: 100}} />(毫秒)
      </Form.Item>
      <Form.Item name={['user', 'website']} label="滑动类型">
          <Radio value={1}>焦点 </Radio>
          <Radio value={0}>箭头</Radio>
      </Form.Item>  
      
      <Form.Item name={['user', 'website']} label="说明">
          <Input.TextArea />
      </Form.Item>
    </>
  );
};

export default Detail
