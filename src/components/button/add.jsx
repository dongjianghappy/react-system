import React from 'react'
import { Button } from 'antd'

export default class Add extends React.Component{

    handle = () => {
        console.log("ggdd");
    }

    render() {
        return (
            <Button type="primary" onClick={this.handle}>添加</Button>
        )
    }
}

