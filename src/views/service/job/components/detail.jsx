import React from 'react'
import { Card, Form, Input, InputNumber, Button, Radio, Select, DatePicker } from 'antd';


export default class Forms extends React.Component{


    render(){
        const { linkType } = React.$enums;
        return (
            <>
                <Form.Item name="name" label="职位名称" >
                    <Input />
                </Form.Item>
                <Form.Item name="status" label="显示">
                    <Radio.Group>
                    <Radio value="1" defaultChecked >是</Radio>
                    <Radio value="0">否</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="department" label="部门">
                    <Input className="input-sm input-150" />
                </Form.Item>
                <Form.Item name="post" label="工作岗位">
                    <Input className="input-sm input-150" />
                </Form.Item>
                <Form.Item name="address" label="工作地址">
                    <Input className="input-sm" />
                </Form.Item>
                <Form.Item name="number" label="招聘人数">
                  <Input className="input-sm input-150" />
                </Form.Item>
                <Form.Item name="deadline" label="时间期限">
                    <Input className="input-sm input-150" />
                </Form.Item>
                <Form.Item name="responsibilities" label="岗位职责">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="qualifications" label="任职资格">
                    <Input.TextArea />
                </Form.Item>
            </>
        )
    }
}
