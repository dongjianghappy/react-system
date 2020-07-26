import React from 'react'
import { Switch } from 'antd'
import api from '../api/index'

const Status = (props) => {
    return (
        <Switch 
            checkedChildren="开启" 
            unCheckedChildren="关闭"
            size="small"
            defaultChecked={props.status === '1' ? true : false}
            onChange={() => {
                api.updateStatus({
                    coding: 'K0002',
                    id: props.id,
                    status: 'status'
                })
            }}
        />
    )
}
export default Status