import React from 'react'
import { Switch } from 'antd'

const Checked = (props) => {


    return (
        <i 
            className={`iconfont ${props.checked === "1" ? "icon-right" : "icon-error"}`}
            onClick={() => {
                props.updateStatus({
                    coding: props.coding,
                    id: props.id,
                    status: props.field
                })
            }}
        ></i>
        // <Switch 
        //     checkedChildren={props.field !== 'checked' ? "NO" : ""} 
        //     unCheckedChildren={props.field !== 'checked' ? "OFF" : ""} 
        //     size="small"
        //     defaultChecked={(props.status || props.checked) === '1' ? true : false}
        //     checked={(props.status || props.checked) === '1' ? true : false}
        //     onChange={() => {
        //         props.updateStatus({
        //             coding: props.coding,
        //             id: props.id,
        //             status: props.field
        //         })
        //     }}
        // />
    )
}

export default Checked
