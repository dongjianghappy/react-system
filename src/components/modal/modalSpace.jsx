import React, { Fragment } from 'react'
import { Button, Modal, message, Card, Row, Col } from 'antd'
import { connect } from 'react-redux'
import dispatchToProps from '../../store/actions'
class ModalSpace  extends React.Component{

    state = { visible: false };

    showModal = () => {
            this.props.getSpace()
            this.setState({
                visible: true,
            });
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

    openFile = e =>{
        console.log("dds");
    }

    render() {
        const { visible } = this.state
        const { butName, title, type, width, className } = this.props
        const list = this.props.list.list.fileList
        debugger
        return (
            <Fragment>
                
                <div  onClick={this.showModal}>{this.props.children}</div>
                
                <Modal
                    title={title || "图片空间"}
                    width={width ? width*1 : '80%'}
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
                    <Card
                        bordered={false}
                        extra={
                            <div>
                                当前目录含有16文件<a href="#">返回上级目录</a>
                            </div>
                        }
                    >
                            <Row style={{height: 320}}>
                            {
                                list && list.map((item, i) => (
                                    <Col span={3} style={{padding: 5}}>
                                        <Card style={{height:100}}>
                                            <div>{item.type === '文件夹' ? 
                                            <img src={item.path} width="40" onClick={this.openFile} />
                                            : <img src={item.img_url} width="100%" />}</div>
                                            <div>{item.name}</div>
                                        </Card>
                                    </Col>
                                ))
                            }
                            </Row>
                    </Card>
                </Modal>
            </Fragment>
        )
    }
}

const stateToProops = (state) => {
    debugger
    return {
        list: state.space
    }
  }

export default connect(stateToProops, dispatchToProps)(ModalSpace)