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

class CollectionList extends React.Component{

    option = [
      {
        name: "来源",
        field: 'source',
        list: [
          {
            value: "",
            name: "全部"
          },
          ...React.$enums.linkType
        ]
      },
      {
        name: "显示",
        field: 'display',
        list: [
          {
            value: "",
            name: "全部"
          },
          {
            value: "0",
            name: "首页"
          },
          {
            value: "1",
            name: "全站"
          }
        ]
      },
      {
        name: "状态",
        field: 'status',
        list: [
          {
            val: "",
            name: "全部"
          },
          {
            value: "1",
            name: "开启"
          },
          {
            value: "0",
            name: "关闭"
          }
        ]
      },
    ]

    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
              // render: (text, record) => (
              //   <R_checkbox onChange={this.props.checkBox} list={this.props.state.link.checkedList} data={record.id}></R_checkbox>
              // ),
            },
            {
              title: '编号',
              dataIndex: 'name',
            },
            {
              title: '标题',
              dataIndex: 'url',
            },
            {
                title: '节点',
                dataIndex: 'source'
              },
              {
                title: '状态',
                dataIndex: 'status',
                // render:(text, record) => (
                //   <Status type="switch" coding="O0009" field="status" {...record} updateStatus={this.props.updateStatus} />
                // )
              },
            {
                title: '入库时间',
                dataIndex: 'type',
            render: text => (
            <a>{text}</a>
            ),
              },   
              {
                title: '操作',
                dataIndex: 'operating',
                // render: (text, record) => (
                //   <div>
                //     <Space>
                //       <R_button.edit click={this.handleClick} id={record.id} action="edit" title="编辑友链" dispatch="popup" node="drawer" />
                //       <R_button.del click={this.handleClick} id={record.id} title="删除友链" dispatch="popup" node="dialog" fn="getDelete" />
                //     </Space>
                //   </div>
                // ),
              },
        ]
    }

    componentDidMount(){
      this.props.select({
        data: {
          page: 0,
          pagesize: 10,
          coding: "O0009"
        }          
    })
    }

    handleClick = (data) => {
      this.props[data.dispatch](data)
    }     
    
    render(){
      const {columns} = this.state
      const {list} = this.props.module
        return (
            <div>
              <ModalGroup {...this.props} coding="O0009" />
              
                <div style={{marginBottom: 15}}>
                  <ul className="navbar">
                    <li>采集列表</li>
                    <li>选择节点类型</li>
                    <li className="search"><Condition /></li>
                  </ul>
                </div>

                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={list}
                    pagination={ false }
                />
                <ButtonGroup {...this.props}></ButtonGroup>
                <input id="coding" type="hidden" value="O0009" />
            </div>
        )
    }
}

const stateToProops = (state) => {
  return {
    global: state.common.global,
    state,
    module: state.collection
  }
}

export default connect(stateToProops, dispatchToProps)(CollectionList)
