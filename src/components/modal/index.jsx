import React, { Fragment } from 'react'
import { Button, Modal, message } from 'antd'

export default class Dialog extends React.Component{

    state = { visible: false };

    componentDidMount(){

        // 当状态抽屉状态为true时则更新状态值
        if(this.props.global.dialog.status){
          this.setState({
            visible: true,
          });
        }
    }

    showModal = () => {
        // 是否勾选
        if(this.props.dataSource && this.props.dataSource.length === 0){
            message.info(this.props.messageTitle);
        }else{
            this.setState({
                visible: true,
            });
        }

    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
        this.props.popup({
            node: "dialog"
        })
        this.props.handleOk(this.props)
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });

        // 延时更改状态，修复抽屉滑动隐藏
        setTimeout(() => {
            this.props.popup({
                node: "dialog"
            })
        }, 300)
    };

    render() {
        const { visible } = this.state
        const { butName, type, size, width, className } = this.props
        const { title } = this.props.global.dialog
        return (
            <Fragment>
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
