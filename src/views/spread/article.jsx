import React from 'react'
import { Card, Form, Input, InputNumber, Button, Radio, Select, DatePicker } from 'antd';
import { SelectBox } from '../../components'


// 这种常量可以定义在组件外，官网是这么定义的
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
};



export default class AddArticle extends React.Component{

        submit = () => (
            console.log("sssssss")
        )

        render(){

            const { linkType } = React.$enums;
            return (
                    <Form
                    {...layout}
                    >
                    <Form.Item name={['user', 'name']} label="网站名称" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="url地址" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="顺序" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="显示">
                        <Radio value={1}>是</Radio>
                        <Radio value={0}>否</Radio>
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="显示页面">
                        <Radio value={1}>首页</Radio>
                        <Radio value={0}>全站</Radio>
                    </Form.Item>

                    <Form.Item name={['user', 'name']} label="来源" rules={[{ required: true }]}>
                        <SelectBox data={linkType} />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="方式" rules={[{ type: 'email' }]}>
                        <Radio value={1}>交换</Radio>
                        <Radio value={0}>出售</Radio>
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="出售状态" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <Radio value={1}>正常</Radio>
                        <Radio value={0}>过期</Radio>
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="出售次数">
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="价格">
                        <Input />
                    </Form.Item>

                    <Form.Item name={['user', 'website']} label="站点简介">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="上架时间">
                        <DatePicker /> 到 <DatePicker />
                    </Form.Item>
                    </Form>
            )
        }
}