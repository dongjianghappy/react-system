import React from 'react'
import { Form, Button, Input } from 'antd'


const Search = (props) => {

    const onFinish = (values) => {

        const params = Object.assign(props.search, values)
        props.select({
            api: props.api,
            data: {
                coding: props.coding,
                page: 0,
                pagesize: 15,
                ...params
            },
            node: props.node           
        })
        props.searchField({
            field: values
        })
    };

    return (
        <>
            <Form
                layout="inline"
                onFinish={onFinish}
                style={{float: "right"}}
            >
            {
                props.render 
                ? 
                props.render()
                : 
                <Form.Item name="title">
                    <Input placeholder="关键词查找" className="input-250 input-sm mr10" prefix="sd" />
                </Form.Item>
            }
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="mr5">查询</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Search