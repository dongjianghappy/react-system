import React from 'react'
import { Button } from 'antd'
import { PlusOutlined, EditOutlined  } from '@ant-design/icons';

const Edit = (props) => {
    return (
        <Button type="primary" size="small" ><EditOutlined  /> 编辑</Button>
    )
}
export default Edit
