import React from 'react'
import { Switch, Row, Col, Pagination } from 'antd'
import { ButtonGroup } from './index'
import { connect } from 'react-redux'
import dispatchToProps from '../store/dispatch'

const Operatinavbar = (props) => {
    return (
        <Row style={{marginTop: 15}}>
        <Col span={12}><ButtonGroup /></Col>  
        <Col span={12} style={{textAlign: 'end'}}><Pagination defaultPageSize={10} total={props.total} onChange={props.getListAction} /></Col>  
      </Row>
    )
}


export default connect(null, dispatchToProps)(Operatinavbar)
