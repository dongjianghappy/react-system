import React, { useState, useEffect } from 'react';
import { Drawer, Button, Form, message } from 'antd';
import warning from '../modal/warning'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const DrawerForm = (props) => {
  const {dispatch, action} = props
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
  const [form] = Form.useForm();

  const showDrawer = () => {
    if(!props.authorized){
      return warning()
    }

    if(action === 'edit'){
      dispatch.fetch({
        api: "detail",
        data: {
          ...props.data
        }          
      }).then((res) => {
        form.setFieldsValue(res.result);
        setData(res.result)
        props.renderInit && props.renderInit(res.result)
      })
    }

    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onFinish = () => {
    if(action === 'add'){
      dispatch.insert({
            api: props.api,
            data: {
              ...props.data,
              ...form.getFieldsValue(),
            }
        }).then(() => {
          message.info("新增成功")
          setVisible(false);
          props.renderList()
        })
    }else{
      dispatch.update({
            api: props.api,
            data: {
              ...props.data,
              ...form.getFieldsValue(),              
            }
        }).then(() => {
          message.info("编辑成功11")
          setVisible(false);
          props.renderList()
        })
    }
  }

  const Text = () => (
    <>
    <span onClick={showDrawer} >
    {
      props.icon ?
      <i className={`iconfont icon-${props.icon}`} />
      : ""
    }
    {props.disabled}
    {props.name}
    </span>
    </>
  )

  const Buttons = () => (
    <>
    <Button type={props.type || "primary"} onClick={showDrawer} disabled={props.disabled} >
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
        title={props.title || props.name}
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

DrawerForm.defaultProps = {
  action: "add",
  isText: false
}

export default DrawerForm
