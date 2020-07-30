import React from 'react'
import { Space, Button } from 'antd'

const ButtonGroup = (props) => {

    return (
        <Space>
            <Button type="default">全选</Button>
            <Button type="default">删除</Button>
            <Button type="default">开启</Button>
            <Button type="default">关闭</Button>
            <Button type="default">移动</Button>
            <Button type="default">属性设置</Button>
        </Space>
    )
}

export default ButtonGroup
