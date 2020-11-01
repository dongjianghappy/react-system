import React from 'react'
import { Switch, Row, Col } from 'antd'
import ButtonGroup from './buttonGroup'
import Pagination from '../components/pagination'


const Operatinavbar = (props) => {
    debugger
    return (
      <Row>
      <Col span={8}>
        <ButtonGroup node={ props.node } {...props} button={props.button}></ButtonGroup>
      </Col>
      <Col span={16} style={{textAlign: "right"}}>
        <Pagination data={props.module} select={props.select} api={props.api} search={props.search} coding={props.coding} />
      </Col>
      </Row>
    )
}


export default Operatinavbar
