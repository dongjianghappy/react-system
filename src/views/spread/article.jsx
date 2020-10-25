import React from 'react'
import { Card, Form, Input, InputNumber, Button, Radio, Select, DatePicker } from 'antd';
import { SelectBox } from '../../components'

export default class Forms extends React.Component{


    render(){
        const { linkType } = React.$enums;
        return (
            <>
                <Form.Item name="name" label="伙伴名称" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="url" label="url地址">
                    <Input />
                </Form.Item>
                <Form.Item name="sort" label="顺序">
                    <InputNumber />
                </Form.Item>
                <Form.Item name="status" label="显示">
                    <Radio.Group>
                    <Radio value="1" defaultChecked >是</Radio>
                    <Radio value="0">否</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="display" label="预览图">
                </Form.Item>
                <Form.Item name="content" label="站点简介">
                    <Input.TextArea />
                </Form.Item>
            </>
        )
    }
}
