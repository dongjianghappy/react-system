import React, { Fragment } from 'react'
import { Button, Modal, message, Card, Row, Col } from 'antd'
import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
class Main  extends React.Component{

    state = { visible: false };

    componentDidMount(){
        this.props.getSpace()
    }

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
        return (
            <Fragment>
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
            </Fragment>
        )
    }
}

const stateToProops = (state) => {
    return {
        list: state.space
    }
  }

export default connect(stateToProops, dispatchToProps)(Main)