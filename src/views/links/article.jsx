import React from 'react'
import { Card, Form, Input, InputNumber, Button, Radio, Select, DatePicker } from 'antd';
import { SelectBox } from '../../components'

export default class Forms extends React.Component{


    render(){
        const { linkType } = React.$enums;
        return (
            <>
                <Form.Item name="name" label="网站名称" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="url" label="urlzzz地址">
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
                <Form.Item name="display" label="显示页面">
                    <Radio.Group>
                    <Radio value="0">首页</Radio>
                    <Radio value="1">全站</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="source" label="来源">
                    <SelectBox data={linkType} />
                </Form.Item>
                <Form.Item name="method" label="方式">
                    <Radio.Group>
                    <Radio value="1">交换</Radio>
                    <Radio value="0">出售</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="sell" label="出售状态">
                    <Radio.Group>
                    <Radio value="1">正常</Radio>
                    <Radio value="0">过期</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="sell_time" label="出售次数">
                    <Input />
                </Form.Item>
                <Form.Item name="price" label="价格">
                    <Input />
                </Form.Item>

                <Form.Item name="content" label="站点简介">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="上架时间">
                    <DatePicker /> 到 <DatePicker />
                </Form.Item>
            </>
        )
    }
}
