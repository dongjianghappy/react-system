import React from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons';

const Edit = (props) => {

    const handle = () => {
        props.click(props)
    }

    return (
        <Button onClick={handle} type="default" size="small" ><PlusOutlined /> 添加</Button>
    )
}
export default Edit
