import React from 'react'
import {Card, Form, Input, Button, Select, Radio } from 'antd'

import { SelectBox } from '../../../components'

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};

export default class SlideshowFrom extends React.Component{

    render(){

        const { textType } = React.$enums;

        return (
            <Form
            {...layout}
            >
                <Form.Item name={['user', 'name']} label="标题" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="序号" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
                 <Form.Item name={['user', 'name']} label="链接" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>               
                <Form.Item name={['user', 'website']} label="状态">
                    <Radio value={1}>开启</Radio>
                    <Radio value={0}>关闭</Radio>
                </Form.Item>
                <Form.Item name={['user', 'name']} label="图片" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="说明">
                    <Input.TextArea />
                </Form.Item>
            </Form>
        )
    }
}