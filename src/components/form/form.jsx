import React, { useState, useEffect } from 'react'
import { Form, Button } from 'antd'

import {
    ButtonGroup
} from '../../common'

const layout = {
labelCol: { span: 2 },
wrapperCol: { span: 22 },
};

const R_form = (props) => {

    const [form] = Form.useForm();

    useEffect( async () => {
        if(props.id){
            const data =  await props.fetch({
                api: "detail",
                data: {
                    coding: props.coding,
                    id: props.id
                }
            })
            form.setFieldsValue(data.result);
            props.init(data.result)
        }
      }, [])

    const onFinish = values => {
        if(!props.id){
            props.insert({
                api: props.api,
                data: {
                    coding: props.coding,
                    content: props.content,
                    ...values,
                    ...props.formData
                }
            })
        }else{
            props.update({
                api: props.api,
                data: {
                    coding: props.coding,
                    content: props.content,
                    id: props.id,
                    ...values,
                    ...props.formData            
                }
            })
        }
    };

    return (
        <Form
            {...layout}
            form={form}
            labelAlign="left"
            onFinish={onFinish}
        >
            {props.children}
            <Form.Item label=" " colon={false} style={{padding: '10px 25px'}}>
                <Button type="primary" htmlType="submit">保存</Button>
            </Form.Item>
        </Form>
    )
}

export default R_form