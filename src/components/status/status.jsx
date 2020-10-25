import React from 'react'
import { Switch } from 'antd'

const Status = (props) => {
    return (
        <Switch 
            disabled={props.disabled || ""}
            checkedChildren={props.field !== 'checked' ? "NO" : ""} 
            unCheckedChildren={props.field !== 'checked' ? "OFF" : ""} 
            size="small"
            defaultChecked={(props.status || props.checked) === '1' ? true : false}
            checked={(props.status || props.checked) === '1' ? true : false}
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
