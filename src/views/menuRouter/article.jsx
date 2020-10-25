import React from 'react'
import { Card, Form, Input, InputNumber, Button, Radio, Select, DatePicker, Checkbox } from 'antd';
import { SelectBox } from '../../components'

const { Option } = Select
export default class Forms extends React.Component{


    render(){
        const { module } = React.$enums;
        return (
            <>
                <Form.Item name="name" label="页面" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="path" label="路径">
                    <Input />
                </Form.Item>
                <Form.Item name="sort" label="顺序">
                    <Input />
                </Form.Item>
                <Form.Item name="component" label="组件">
                    <Input />
                </Form.Item>
                <Form.Item name="authority" label="权限">
                    <Input />
                </Form.Item>
                <Form.Item name="channel" label="频道">
                    <Radio.Group>
                        <Radio value="1" defaultChecked >是</Radio>
                        <Radio value="0">否</Radio>
                        </Radio.Group>
                </Form.Item>
                <Form.Item name="module" label="标识">
                    <Input />
                </Form.Item>
                <Form.Item label="菜单" name="isShow" valuePropName="checked">
                    <Checkbox>勾选时做为菜单展示侧边栏</Checkbox>
                </Form.Item>
                <Form.Item name="icon" label="图标">
                    <Input.TextArea />
                </Form.Item>
            </>
        )
    }
}
