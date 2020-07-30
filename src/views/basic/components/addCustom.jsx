import React from 'react'
import {Card, Form, Input, Button, Select } from 'antd'

import { SelectBox } from '../../../components'

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};

export default class AddCustom extends React.Component{

    render(){

        const { textType } = React.$enums;

        return (
            <Form
            {...layout}
            >
                <Form.Item name={['user', 'name']} label="参数名" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="字段名" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="参数值">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'name']} label="文本类型" rules={[{ required: true }]}>
                    <SelectBox data={textType} />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="说明">
                    <Input.TextArea />
                </Form.Item>
            </Form>
        )
    }
}