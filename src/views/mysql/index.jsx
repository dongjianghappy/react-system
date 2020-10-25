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

class Mysql extends React.Component{



    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name1'
            },
            {
              title: '数据库表',
              dataIndex: 'dbname',
            },
            {
              title: '类型',
              dataIndex: 'dbtype',
            },
            {
                title: '记录',
                dataIndex: 'dbrow'
              },
            {
                title: '整理',
                dataIndex: 'dbcharset',
            render: text => (
            <a>{text}</a>
            ),
              },   
              
            {
                title: '大小',
                dataIndex: 'price',
                render: text => <a>{text}</a>,
              },
            {
                title: '多余',
                dataIndex: 'datetime',
                render: text => <a>{text}</a>,
              },                
              {
                title: '创建时间',
                dataIndex: 'dbtime'
              },
              {
                title: '操作',
                dataIndex: 'operating',
              },
        ]
    }

    componentDidMount(){
      this.props.select({
        api: 'mysql',
        node: "list"            
      })
    }

    handleClick = (data) => {
        this.props[data.dispatch](data)
      }    
    
    render(){
      const {columns} = this.state
      const { list } = this.props.module
        return (
            <Card>
                <div style={{marginBottom: 15}}>
                  <ul className="navbar">
                    <li>数据库列表</li>
                    <li>备份管理</li>
                  </ul>
                </div>

                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={list}
                    pagination={ false }
                />
                <ButtonGroup {...this.props}></ButtonGroup>
                <input id="coding" type="hidden" value="P0003" />
            </Card>
        )
    }
}

const stateToProops = (state) => {
  return {
    module: state.mysql
  }
}

export default connect(stateToProops, dispatchToProps)(Mysql)
