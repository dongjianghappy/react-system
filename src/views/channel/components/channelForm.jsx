import React from 'react'
import { Card, Form, Input, InputNumber, Button, Radio, Select, DatePicker } from 'antd';
import { SelectBox } from '../../../components'


// 这种常量可以定义在组件外，官网是这么定义的
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
};



export default class ChannelForm extends React.Component{

        render(){

            const { channelType } = React.$enums;
            return (
                    <Form
                    layout="vertical"
                    labelAlign="left"
                    {...layout}
                    >
                    <Form.Item name={['user', 'name']} label="频道名称" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="顺序" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="频道入口" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <SelectBox data={channelType} />
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="显示">
                        <Radio value={1}>是</Radio>
                        <Radio value={0}>否</Radio>
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="预览图">
                        <Input />
                    </Form.Item>

                    <Form.Item name={['user', 'name']} label="标题：" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="关键字" rules={[{ type: 'email' }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="描述" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">保存</Button>
                    </Form.Item>
                    </Form>
            )
        }
}