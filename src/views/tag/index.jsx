import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Input, DatePicker} from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Status, Dialog, Operatinavbar, Condition } from '../../components/index.js'
import dispatchToProps from '../../store/dispatch'
import {
    R_button
  } from '../../components/index.js'

const { Search } = Input;
const { RangePicker } = DatePicker;

class Tag extends React.Component{

    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
              render: text => <a><Checkbox></Checkbox></a>,
            },
            {
              title: '顺序',
              dataIndex: 'sort',
            },
            {
              title: '名称',
              dataIndex: 'name',
            },{
                title: '状态',
                dataIndex: 'status',
                render:(text, record) => (
                  <Status type="switch" coding="O0006" field="status" {...record} updateStatus={this.props.updateStatus} />
                )
              },
              {
                title: '操作',
                dataIndex: 'operating',
                render: (text, record) => (
                    <Space size="middle">
                      <R_button.del click={this.handleClick} id={record.id} title="删除友链" dispatch="popup" node="dialog" fn="getDelete" />
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
            coding: 'O0006'
        },
        node: 'cate'           
      })
    }


    render(){
      const {columns} = this.state

        const {cate} = this.props.module
        return(

            <>
                <div style={{marginBottom: 15}}>
                  <ul className="navbar">
                    <li>关键词分类</li>
                    <li><R_button.link click={this.handleClick} action="add" name="新增标签类型" title="新增标签类型" dispatch="popup" node="drawer" /></li>
                  </ul>
                </div>



                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={cate}
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
    module: state.tag
  }
}

export default connect(stateToProops, dispatchToProps)(Tag)
