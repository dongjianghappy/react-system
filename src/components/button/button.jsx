import React from 'react'
import { message, Button } from 'antd'

export default class R_button extends React.Component {

    handle = () => {

        // 是否勾选
        if(!this.props.checked){
            message.info(this.props.messageTitle);
        }else{
            this.props.render()
        }
        
    }
    render() {

        return (
        <Button onClick={this.handle}>{this.props.title}</Button>
        )
    }
}