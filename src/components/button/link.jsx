import React from 'react'
import { message, Button } from 'antd'

const R_link = (props) => {

    const { type, size } = props
    const handle = () => {
        props.click(props)
    }

    return (
        <a onClick={handle}>{props.title || "按钮"}</a>
    )
}

export default R_link 
