import React, { useState, useEffect } from 'react';
import { Drawer, Button, Form, Input, Select, Radio } from 'antd';



const Detail = (props) => {

  return (
    <>
      <Form.Item name="level" label="等级" >
          <Input className=" input-sm" />
      </Form.Item>
      <Form.Item name="level_icon" label="等级图标" >
          <Input className=" input-sm input-100" />
      </Form.Item>
      <Form.Item name="time" label="登录天数" >
          <Input className=" input-sm" />
      </Form.Item>
      <Form.Item name="description" label="积分说明" >
          <Input.TextArea/>
      </Form.Item>
    </>
  );
};

export default Detail
