import React from 'react'
import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';

const Edit = (props) => {

    const handle = () => {
        props.click(props)
    }

    return (
        <Button disabled={props.disabled || ""} onClick={handle} type="primary" danger size="small" ><DeleteOutlined /> 删除</Button>
    )
}
export default Edit
