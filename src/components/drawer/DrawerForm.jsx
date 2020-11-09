import React, { useState, useEffect } from 'react';
import { Drawer, Button, Form, message } from 'antd';

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
            api: props.api,
            data: {
              coding: props.coding,
              ...props.data,
              ...form.getFieldsValue(),
            }
        }).then(() => {
          setVisible(false);
          props.renderList()
          message.info("新增成功")
        })
    }else{
      props.update({
            api: props.api,
            data: {
              coding: props.coding,
              ...props.data,
              id: props.id,
              ...form.getFieldsValue(),              
            }
        }).then(() => {
          setVisible(false);
          props.renderList()
          message.info("编辑成功")
        })
    }
  }

  return (
    <>
      <Button type={props.type || "primary"} onClick={showDrawer}>
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
