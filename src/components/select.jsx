import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const SelectBox = (props) => {
    return (
        props.data.map(item => (
            <Option value={item.value}>{item.name}</Option>
            ))
    )
}

export default SelectBox
