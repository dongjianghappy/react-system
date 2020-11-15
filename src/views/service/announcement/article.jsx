import React, { useState } from 'react'
import { Card, Form, Input, InputNumber, Button, Radio } from 'antd';
import { Editor } from '@/components'

const Detail = (props) =>{

    const [content, setContent] = useState("")

    const getContent = (data) => {
        setContent({
          content: data
        })
    }    

    return (
        <>
            <Form.Item name="title" label="伙伴名称" >
                <Input />
            </Form.Item>
            <Form.Item name="sort" label="顺序">
                <InputNumber />
            </Form.Item>
            <Form.Item name="url" label="类型">
                <Input />
            </Form.Item>
            <Form.Item name="status" label="显示">
                <Radio.Group>
                <Radio value="1" defaultChecked >是</Radio>
                <Radio value="0">否</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="内容">
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
