import React, { Fragment, useState, useEffect } from 'react'
import { Button, Modal, message, Card, Row, Col } from 'antd'
import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
const ModalCate = (props) => {

    const [visible, setVisible] = useState(false)
    const [list, setList] = useState([])
    const [current, setCurrent] = useState("")

    const showModal = async () => {

         await props.select2({
            api: "cateList",
            data: {
              coding: props.coding
            },
            storage: true          
        }).then((res) => {
            setList(res.result)
        })
        setVisible(true)
    };

    const handleOk = async () => {
        await props.fetch({
            api: "moveAticle",
            data: {
              coding: props.artCoding,
              id: props.id,
              fid: current
            },      
        }).then((res) => {
            alert("更改成功")
        })
        setVisible(false)
    };

    const handleCancel = e => {
        setVisible(false)
    };

    const handelSelect = (v) => {
        setCurrent(v)
    }
        return (
            <Fragment>
                <div  onClick={showModal} className="pointer">{props.children}</div>
                
                <Modal
                    title={props.title || "分类选择"}
                    width={props.width ? props.width*1 : '50%'}
                    height={500}
                    visible={visible}
                    onCancel={handleCancel}
                    footer={
                        props.footerBtn !== null ? 
                        [
                            <Button key="back" onClick={handleCancel}>
                              取消
                            </Button>,
                            <Button key="submit" type="primary"  onClick={handleOk}>
                              确定
                            </Button>,
                          ]
                        : null
                    }
                >
                    {
                        list.map((item, index) => (
                            <div>
                                <h2>{item.name}</h2>

                                {
                                    item.list.map((sss, index) => (
                                        <Row>
                                        <Col span="2" className="p5 cl-red" onClick={()=>handelSelect(`|${item.id}|${sss.id}|`)}>{sss.name}</Col>
                                        <Col span="22">
                                        <Row>
                                        {
                                            sss.list.map((aaa, index) => (
                                                <Col className="p5" onClick={()=>handelSelect(`|${item.id}|${sss.id}|${aaa.id}|`)}>{aaa.name}</Col>
                                                
                                            ))
                                        }
                                        </Row>
                                        </Col>
                                        </Row>
                                    ))
                                }
                            </div>
                        ))
                    }
                </Modal>
            </Fragment>
        )

}

const stateToProops = (state) => {
    return {
        list: state.space
    }
  }

export default connect(stateToProops, dispatchToProps)(ModalCate)