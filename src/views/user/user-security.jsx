import React from 'react';
import { Card, Row, Col, Space, Button } from 'antd'
import { createStore } from 'redux'


import DividerForm from '@/components/form/dividerForm'
import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
import {
  Status,
  R_checkbox,
  R_drawer,
  R_button,
  ModalForm,
  Condition
} from '../../components/index.js'
import {
  Node,
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup
} from '../../common'
class Basic extends React.Component{

    componentDidMount(){
      this.props.select({
        api: "basicInfo",
        data: {
          page: 0,
          pagesize: 10,
          coding: "P0000"
        }          
      })
    }
  
    handle = () => {
      this.props.InfoQuery()
    }

    handleClick = (data) => {
      debugger
      this.props[data.dispatch](data)
    }       

    render(){
        const { list } = this.props.module
        debugger
        const baisc = list.filter(route => route.isdelete === '1' && route.name !== 'logo')
        const logo = list.filter(route => route.isdelete === '1' && route.name === 'logo')
        const custom = list.filter(route => route.isdelete === '0')
        debugger
        return(
           <>
           <Card>
           <Node node={ this.props.node } fn={ this.props.nodeMethod} />
           {/* <ModalGroup {...this.props} coding="P0003" /> */}
            <div style={{marginBottom: 15}}>
              <ul className="navbar">
                <li>密保问题</li>
                <li>
                  <ModalForm action="add" type="text" {...this.props} coding="P0000" butName="新增问题">
                     
                  </ModalForm>  
                </li>
              </ul>
            </div>

            <DividerForm title="基本问题" dataSource={baisc} {...this.props} coding="P0000" handle={this.handle} ></DividerForm>
            </Card>

            <input id="coding" type="hidden" value="P0000" />
           </>
        )
    }
}

const stateToProops = (state) => {
  return {
    module: state.basic
  }
}

export default connect(stateToProops, dispatchToProps)(Basic)