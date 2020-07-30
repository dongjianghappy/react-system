import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const SelectBox = (props) => {
    
    return (
        <Select style={{ width: 120 }}>
        {
            props.data.map(item => (
            <Option value={item.value}>{item.name}</Option>
            ))
        }
    </Select>
    )
}

export default SelectBox
