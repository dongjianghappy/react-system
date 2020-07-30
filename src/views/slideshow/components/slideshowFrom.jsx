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
                <Form.Item name={['user', 'name']} label="名称" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="显示频道" rules={[{ type: 'email' }]}>
                    <SelectBox data={textType} />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="状态">
                    <Radio value={1}>开启</Radio>
                    <Radio value={0}>关闭</Radio>
                </Form.Item>
                <Form.Item name={['user', 'name']} label="宽度" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="高度">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="滑动方向">
                    <Radio value={1}>向左滑动</Radio>
                    <Radio value={0}>向右滑动</Radio>
                    <Radio value={1}>向上滑动</Radio>
                    <Radio value={0}>向下滑动</Radio>
                    <Radio value={0}>淡入浅出</Radio>
                </Form.Item>                

                <Form.Item name={['user', 'website']} label="焦点位置">
                    <Input style={{width: 100}} />(right)
                    <Input style={{width: 100}} />(bottom)
                </Form.Item>
                <Form.Item name={['user', 'name']} label="时间" rules={[{ required: true }]}>
                <Input style={{width: 100}} />(毫秒)
                </Form.Item>
                <Form.Item name={['user', 'website']} label="速度">
                <Input style={{width: 100}} />(毫秒)
                </Form.Item>
                <Form.Item name={['user', 'website']} label="滑动类型">
                    <Radio value={1}>焦点 </Radio>
                    <Radio value={0}>箭头</Radio>
                </Form.Item>  
                
                <Form.Item name={['user', 'website']} label="说明">
                    <Input.TextArea />
                </Form.Item>
            </Form>
        )
    }
}