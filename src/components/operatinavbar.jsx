import React from 'react'
import { Switch, Row, Col, Pagination } from 'antd'
import { ButtonGroup } from './index'
import { connect } from 'react-redux'
import dispatchToProps from '../store/dispatch'

const Operatinavbar = (props) => {
    return (
      <div>sd</div>
    //   <Row style={{marginTop: 25}}>
    //   <Col span={8}>
    //     <ButtonGroup node={ props.node } {...props} button={props.button}></ButtonGroup>
    //   </Col>
    //   <Col span={16} style={{textAlign: "right"}}>
    //     <R_pagination data={props.module} select={props.select} />
    //   </Col>
    // </Row>
    )
}


export default connect(null, dispatchToProps)(Operatinavbar)
