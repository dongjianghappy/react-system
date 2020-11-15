import React, { useState, useEffect } from 'react';
import { Drawer, Button, Form, message } from 'antd';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const DrawerRender = (props) => {
  const [visible, setVisible] = useState(false);
  const [response, setResponse] = useState({});

  const showDrawer = () => {
    debugger
    setVisible(true);
    if(props.data){
      props.fetch({
        api: props.api || "detail",
        data: {
          coding: props.coding,
          ...props.data
        }          
      }).then((res) => {

        setResponse(res.result)
      })
    }
  };

  const onClose = () => {
    setVisible(false);
  };


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
        footer={false}
      >
        {props.children && React.cloneElement(props.children, {
          response,
          ...props
        })}
      </Drawer>
    </>
  );
};

export default DrawerRender
