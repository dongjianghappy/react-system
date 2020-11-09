import React from 'react';
import { Card, Row, Col, Space, Button } from 'antd'
import { createStore } from 'redux'


import DividerForm from '@/components/form/dividerForm'
import { connect } from 'react-redux'
import dispatchToProps from '@/store/dispatch'
import Detail from './components/detail'
import {
  Status,
  R_checkbox,
  R_drawer,
  R_button,
  ModalForm,
  Condition,
  R_modal
} from '@/components/index.js'
import {
  Node,
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup
} from '@/common'
class Basic extends React.Component{

    getData = () => {
      this.props.select({
        data: {
          page: 0,
          pagesize: 10,
          coding: "U0009"
        },
        node: "security"        
      })
    }

    componentDidMount(){
      this.getData()
    }
  
    handle = () => {
      this.props.InfoQuery()
    }

    handleClick = (data) => {
      debugger
      this.props[data.dispatch](data)
    }       

    render(){
        const { security } = this.props.module

        return(
           <>
           <Card>

           <div style={{marginBottom: 15}}>
            <Space>
              <Button type="primary">安全问题</Button>
              <R_modal.modalForm title="新增问题" name="新增问题" coding="U0009" renderList={this.getData} {...this.props} >
                <Detail />
              </R_modal.modalForm>
            </Space>
            </div>

           <table width="100%" class="table-striped table-hover col-left-2">
                {
                    security && security.map((item, index) => (
                    <tr>
                        <td class="col-md-1">问题一</td>
                        <td class="col-md-21">{item.quetion}</td>
                        <td class="col-md-2">
                        <Space size="middle">
                            <R_modal.modalForm title="编辑应用" name="编辑" id={item.id} coding="U0009" renderList={this.getData} {...this.props} >
                                <Detail />
                            </R_modal.modalForm>
                            <Button type="primary" size="small">删除</Button>
                        </Space>
                        </td>
                    </tr>
                    ))
                }
                </table>
            </Card>
           </>
        )
    }
}

const stateToProops = (state) => {
  return {
    module: state.user
  }
}

export default connect(stateToProops, dispatchToProps)(Basic)