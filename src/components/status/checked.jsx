import React from 'react'

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
    )
}

export default Checked
