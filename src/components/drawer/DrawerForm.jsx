import React, { useState, useEffect } from 'react';
import { Drawer, Button, Form, message } from 'antd';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const DrawerForm = (props) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
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
        setData(res.result)
        props.renderInit && props.renderInit(res.result)
      })
    }
  };

  const onClose = () => {
    setVisible(false);
  };

  const onFinish = () => {
    if(props.action === 'add'){
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

  const Text = () => (
    <>
    <span onClick={showDrawer}>
    {
      props.icon ?
      <i className={`iconfont icon-${props.icon}`} />
      : ""
    }
    {props.name}
    </span>
    </>
  )

  const Buttons = () => (
    <>
    <Button onClick={showDrawer}>
    {
      props.icon ?
      <i className={`iconfont icon-${props.icon}`} />
      : ""
    }
    {props.name ? props.name : "Open"}
    </Button>
    </>
  )

  // 在其他组件调用callback，设置字段值并以{name: value}的方式传回
  const callback = (params) => {
    form.setFieldsValue({...params})
  }

  return (
    <>
      {
        props.isText === true ? <Text /> : <Buttons />
      }

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
            {props.children && React.cloneElement(props.children, {
              callback,
              form
            })}
        </Form>
      </Drawer>
    </>
  );
};

export default DrawerForm
