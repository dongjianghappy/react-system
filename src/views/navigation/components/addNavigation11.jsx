import React from 'react'
import { Card, Form, Input, InputNumber, Button, Radio, Select, DatePicker, Divider } from 'antd';
import { SelectBox } from '../../../components'


// 这种常量可以定义在组件外，官网是这么定义的
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
};



export default class AddNavigation extends React.Component{

        render(){

            const { linkType } = React.$enums;
            return (
                    <Form
                    {...layout}
                    >
                    <Divider orientation="left">基本信息</Divider>
                    <Form.Item name={['user', 'name']} label="导航名称" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="导航连接" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="所属导航" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="顺序">
                        <Radio value={1}>是</Radio>
                        <Radio value={0}>否</Radio>
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="启用">
                        <Radio value={1}>首页</Radio>
                        <Radio value={0}>全站</Radio>
                    </Form.Item>

                    <Form.Item name={['user', 'name']} label="类型" rules={[{ required: true }]}>
                        <SelectBox data={linkType} />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="集合标签" rules={[{ type: 'email' }]}>
                        <Radio value={1}>交换</Radio>
                        <Radio value={0}>出售</Radio>
                    </Form.Item>
                    <Divider orientation="left">页面设置</Divider>
                    <Form.Item name={['user', 'website']} label="SEO标题">
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="关键字">
                        <Input />
                    </Form.Item>

                    <Form.Item name={['user', 'website']} label="描述">
                        <Input.TextArea />
                    </Form.Item>
                    </Form>
            )
        }
}