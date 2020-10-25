import React from 'react'
import { message, Button } from 'antd'

const R_button = (props) => {

    const { type, size } = props
    const handle = () => {
        props.click(props)
    }

    return (
        <Button
        disabled={props.disabled || ""}
        type={type || "default"}
        size={size || "small"}
        onClick={handle}>
            {props.title || "按钮"}
        </Button>
    )
}

export default R_button 
