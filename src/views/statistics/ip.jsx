import React from 'react'
import { Card, Table, Space, Row, Col} from 'antd';
import { connect } from 'react-redux'
import {
  Status,
  R_checkbox,
  R_drawer,
  R_button,
  Dialog,
  Condition
} from '../../components/index.js'
import {
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup
} from '../../common'
import dispatchToProps from '../../store/dispatch'

class Ip extends React.Component{

    
    state ={
        columns: [
            {
              title: 'ID',
              dataIndex: 'name',
              render: (text, record) => (
                <R_checkbox onChange={this.props.checkBox} list={this.props.state.link.checkedList} data={record.id}></R_checkbox>
              ),
            },
            {
              title: 'IP',
              dataIndex: 'name',
            },
            {
              title: '访问时间',
              dataIndex: 'url',
            }
        ]
    }

    componentDidMount(){
      this.props.getListAction()
    }

    handleClick = (data) => {
      this.props[data.dispatch](data)
    }     
    
    render(){
      const {columns} = this.state
      const {list } = this.props
        return (
            <div>
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={list}
                    pagination={ false }
                />
                <input id="coding" type="hidden" value="O0009" />
            </div>
        )
    }
}

const stateToProops = (state) => {
  return {
    module: "link",
    state,
    common: state.common,
    global: state.common.global,
    list: state.link.list
  }
}

export default connect(stateToProops, dispatchToProps)(Ip)
