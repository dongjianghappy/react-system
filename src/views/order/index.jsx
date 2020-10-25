import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Input, DatePicker} from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Status, Dialog, Operatinavbar, Condition } from '../../components/index.js'
import dispatchToProps from '../../store/dispatch'
import {
    R_button
  } from '../../components/index.js'
  import {
    Option
  } from '../../common'
const { Search } = Input;
const { RangePicker } = DatePicker;

class Tag extends React.Component{

  option = [
    {
      name: "类型",
      field: 'type',
      list: [
        {
          value: "",
          name: "全部"
        },
        ...React.$enums.orderType
      ]
    }
  ]

    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
              render: text => <a><Checkbox></Checkbox></a>,
            },
            {
              title: '订单号',
              dataIndex: 'number',
            },
            {
              title: '订单名称',
              dataIndex: 'name',
            },{
                title: '类型',
                dataIndex: 'status',
                render:(text, record) => (
                  <Status type="switch" coding="O0006" field="status" {...record} updateStatus={this.props.updateStatus} />
                )
              },
            {
              title: '价格(元/周期)',
              dataIndex: 'price',
            },
            {
              title: '时长(月/个)',
              dataIndex: 'cycle',
            },
            {
              title: '时间范围',
              dataIndex: 'start_time',
            },
              
              {
                title: '操作',
                dataIndex: 'operating',
                render: (text, record) => (
                    <Space size="middle">
                      正在进行中
                    </Space>
                  ),
              },
        ],
        data: [],
        total: 0,
        pages: 0
    }

    componentDidMount(){
      this.props.select({
        data: {
            page: 0,
            pagesize: 100,
            coding: 'P0014'
        }         
      })
    }


    render(){
      const {columns} = this.state

        const {list} = this.props.module
        return(

            <>
                <div style={{marginBottom: 15}}>
                  <ul className="navbar">
                    <li>订单管理</li>
                  </ul>
                  <Option option={this.option} select={this.props.select} coding="P0014" />
                </div>



                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={list}
                    pagination={false}
                />

            </>
        )
    }
}

const stateToProops = (state) => {
  return {
    global: state.common.global,
    state,
    module: state.order
  }
}

export default connect(stateToProops, dispatchToProps)(Tag)
