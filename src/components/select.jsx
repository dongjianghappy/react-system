import React from 'react'
import { Form, Select } from 'antd'

const { Option } = Select

const SelectBox = (props) => {
    return (
        <Form>
            <Form.Item>
            <Select>
            {
            props.data.map(item => (
                <Option value={item.value}>{item.name}</Option>
            )) 
            }
        </Select>
            </Form.Item>
        </Form>
    )
}

export default SelectBox
