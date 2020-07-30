import React from 'react'
import {Card, Form, Input, Button } from 'antd'

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};

export default class Info extends React.Component{

    state = {
        data: [
            {
                name: '网站名称',
                value: 'nan'
            },
            {
                name: '网站域名',
                value: 'nan'
            },
            {
                name: '网站标题',
                value: 'nan'
            },
            {
                name: '网站关键字',
                value: 'nan'
            },
            {
                name: '网站描述',
                value: 'nan'
            },
            {
                name: 'ICP备案号',
                value: 'nan'
            },
            {
                name: '第三方统计',
                value: 'nan'
            }
        ]
    }

    render(){

        const { data } = this.state

        return (
            <Form
                component={false}
                colon={false}
                labelAlign={"left"}
                {...layout}
            >
                {
                    data.map((item) => (
                        <Form.Item label={item.name} key="value">
                        <Input />
                    </Form.Item>
                    ))
                }
                <Form.Item>
                    <Button type="primary">保存</Button>
                </Form.Item>
            </Form>
        )
    }
}