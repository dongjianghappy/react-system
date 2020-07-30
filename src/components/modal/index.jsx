import React, { Fragment } from 'react'
import { Button, Modal, message } from 'antd'

export default class Dialog extends React.Component{

    state = { visible: false };

    showModal = () => {
        // 是否勾选
        //if(this.props.checked !== undefined && this.props.checked === false){
        if(this.props.dataSource && this.props.dataSource.length === 0){
            message.info(this.props.messageTitle);
        }else{
            this.setState({
                visible: true,
            });
        }

    };

    handleOk = e => {
    this.props.handleOk()
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
        const { butName, title, type, width } = this.props
        return (
            <Fragment>
                { 
                    this.props.type === 'text' ? 
                    <span onClick={this.showModal}>{butName}</span>
                    : <Button type={type || "default"} size="small" onClick={this.showModal}>{butName}</Button>
                }
                
                <Modal
                    title={title || "提示信息"}
                    width={width ? width*1 : 500}
                    visible={visible}
                    onCancel={this.handleCancel}
                    footer={
                        this.props.footerBtn !== null ? 
                        [
                            <Button key="back" onClick={this.handleCancel}>
                              取消
                            </Button>,
                            <Button key="submit" type="primary"  onClick={this.handleOk}>
                              确定
                            </Button>,
                          ]
                        : null
                    }
                >
                    {this.props.children}
                </Modal>
            </Fragment>
        )
    }
}
