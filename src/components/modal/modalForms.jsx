import React, { useState } from 'react'
import { Modal, Button, Form, message } from 'antd';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

const ModalForm = (props) => {

    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
      debugger
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

    const handleCancel = e => {
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
              message.info("编辑成功")
              props.renderList()
            })
        }
      }

    return (
      <>
        <Button type={props.type || "primary"} onClick={showModal}>
            {
            props.name ? props.name : "Open Modal"
            }
        </Button>
        <Modal
          title={props.title}
          visible={visible}
          onOk={onFinish}
          onCancel={handleCancel}
        >
        <Form {...layout} form={form} labelAlign="left" >
            {props.children}
        </Form>
        </Modal>
      </>
    )
}

export default ModalForm
