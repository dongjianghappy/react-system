import React, { useState, useEffect } from 'react';
import { Drawer, Button, Form } from 'antd';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const DrawerForm = (props) => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    setVisible(true);
    if(props.id){
      props.fetch({
        api: "detail",
        data: {
          coding: props.coding,
          id: props.id
        }          
      }).then((res) => {
        form.setFieldsValue(res.result);
      })
    }
  };

  const onClose = () => {
    setVisible(false);
  };

  const onFinish = () => {
    if(!props.id){
      props.insert({
            coding: props.coding,
            ...form.getFieldsValue(),
        }).then(() => {
          setVisible(false);
        })
    }else{
      props.update({
            coding: props.coding,
            id: props.id,
            ...form.getFieldsValue(),
        }).then(() => {
          setVisible(false);
        })
    }
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        {
          props.name ? props.name : "Open"
          
        }
      </Button>
      <Drawer
        title={props.title}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={600}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={onFinish} type="primary">
              Submit
            </Button>
          </div>
        }
      >
        <Form {...layout} form={form} labelAlign="left" >
            {props.children}
        </Form>
      </Drawer>
    </>
  );
};

export default DrawerForm
