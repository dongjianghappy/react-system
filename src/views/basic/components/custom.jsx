import React from 'react'
import {Card, Form, Input, Button } from 'antd'
import { Dialog } from '../../../components'
import AddCustom from './addCustom'
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};

export default class Custom extends React.Component{

    state = {
        data: [
            {
                name: '名称1',
                value: 'nan'
            },
            {
                name: '名称2',
                value: 'nan'
            },
            {
                name: '名称3',
                value: 'nan'
            }
        ]
    }

    render(){

        const { data } = this.state

        return (

            <Card title="自定义管理">
                
              
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
            </Card>
        )
    }
}