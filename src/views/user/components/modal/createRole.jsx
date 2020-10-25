import React, { useState } from 'react'
import {Form, Modal, Button, Input } from 'antd';


const CraeteRole = (props) => {
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm();

  const showModal = async () => {
    setVisible(true)
    const data =  await props.fetch({
        api: "detail",
        data: {
            coding: props.coding,
            id: props.id
        }
    })
    form.setFieldsValue(data.result);
  };

  const onFinish = values => {
    setVisible(false)

    if(!props.id){
        props.insert({
            coding: props.coding,
            ...values
        })
    }else{
        props.update({
            coding: props.coding,
            id: props.id,
            ...values
        })
    }
  };

  const handleCancel = e => {
    setVisible(false)
  };

    return (
        <>
        <Button 
            type={props.type || "primary"} size={props.size || "small"}
            onClick={showModal}>
            {props.name || "Open Modal"}
        </Button>
        <Modal
            title={props.title || "Basic Modal"}
            visible={visible}
            onCancel={handleCancel}
            footer={false}
        >
            <Form 
            form={form}
            layout="vertical"
            onFinish={onFinish}
            >
                <Form.Item label="角色名称" name="name">
                    <Input />
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </Modal>
        </>
    );
}

export default CraeteRole
