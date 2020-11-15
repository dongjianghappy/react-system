import React, { useState } from 'react'
import { Card, Form, Input, InputNumber, Button, Radio } from 'antd';
import { Editor, Upload, UploadModal } from '../../components'

const Detail = (props) =>{ 

    return (
        <>
            <Form.Item name="name" label="伙伴名称" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="url" label="url地址">
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
            <Form.Item name="display" label="预览图">
                <Upload image={props.data.image} />
                <UploadModal />
            </Form.Item>
            <Form.Item label="站点简介">
                <Editor 
                    field="content"
                    value={props.data.content}
                    change={props.change}
                />
            </Form.Item>
        </>
    )

}

export default Detail
