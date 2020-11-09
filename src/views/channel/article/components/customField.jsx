import React, { useState, useEffect } from 'react'
import {Space, Card, Table, Checkbox, Button, Input, Form, Radio, Tabs, Select } from 'antd'

const CustomField = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        props.fetch({
            api: "getColumns",
            data: {
                channel_id: props.channel_id,
            }          
          }).then((res) => {
            debugger
            setData(res.result)
          })
    }, [])

    const render = (item) => {
        debugger
        switch(item.text_type){
            case 'input' :
                return (
                    <Form.Item label={item.remark} name={item.fields}>
                        <Input />
                    </Form.Item>
                )
                break
            case 'textarea' :
                return (
                    <Form.Item label={item.remark} name={item.fields}>
                        <Input.TextArea />
                    </Form.Item>
                )
                break
            case 'radio' :
                return (
                    <Form.Item label={item.remark} name={item.fields}>
                        <Radio.Group>
                        <Radio value="1">是</Radio>
                        <Radio value="0">否</Radio>
                        </Radio.Group>
                    </Form.Item>
                )
                break
            case 'checkbox' :
                return (
                    <Form.Item label={item.remark} name={item.fields}>
                        <Checkbox />
                    </Form.Item>
                )
                break
            case 'select' :
                return (
                    <Form.Item label={item.remark} name={item.fields}>
                        <Select />
                    </Form.Item>
                )
                break
            
            default:
                return (<></>)
                break
        }
    }

    return (
        <>
            {
                data.map((item, index) => (
                    render(item)
                ))
                
            }

        </>
    )
}

export default CustomField


