import React from 'react'
import { Switch } from 'antd'

const Status = (props) => {
    return (
        <Switch 
            checkedChildren="开启" 
            unCheckedChildren="关闭"
            size="small"
            defaultChecked={(props.status || props.checked) === '1' ? true : false}
            onChange={() => {
                props.updateStatus({
                    coding: props.coding,
                    id: props.id,
                    status: props.field
                })
            }}
        />
    )
}

export default Status
