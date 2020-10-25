import React from 'react'
import { Button, message } from 'antd'
import { PlusOutlined, EditOutlined  } from '@ant-design/icons';

const Edit = (props) => {

    const handle = () => {
        props.click(props)
    }

    return (
        <Button disabled={props.disabled || ""} onClick={handle} type="primary" size="small" ><EditOutlined  /> 编辑</Button>
    )
}
export default Edit
