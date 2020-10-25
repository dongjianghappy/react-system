import React from 'react'
import {Space, Card, Table, Checkbox, Button, Input, Form, Radio, Tabs } from 'antd'

const CustomField = (props) => {

    return (
        <>
            <Form.Item label="是否启用">
                <Radio.Group>
                <Radio value="1">是</Radio>
                <Radio value="0">否</Radio>
                </Radio.Group>
            </Form.Item>
        </>
    )
}

export default CustomField


