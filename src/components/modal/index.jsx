import React from 'react'
import {Button, Modal } from 'antd'

export default class Dialog extends React.Component{

    state = { visible: false };

    showModal = () => {
        console.log("ggggggggd");
        this.setState({
          visible: true,
        });
    };

    handleOk = e => {
    console.log(e);
    this.setState({
        visible: false,
    });
    };

    handleCancel = e => {
    console.log(e);
    this.setState({
        visible: false,
    });
    };

    render() {

        const { visible } = this.state
        const { butName, title } = this.props
        return (
            <div>
                <Button type="default" onClick={this.showModal}>{butName}</Button>
                <Modal
                    title={title}
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {this.props.children}
                </Modal>
            </div>
        )
    }
}
