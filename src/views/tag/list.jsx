import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Input, DatePicker} from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import dispatchToProps from '../../store/dispatch'
import {
    R_button,
    Condition
  } from '../../components/index.js'
  import {
    Option
  } from '../../common'
const { Search } = Input;
const { RangePicker } = DatePicker;

class TagList extends React.Component{

    option = [
        {
          name: "所有",
          field: 'type',
          list: [
            {
              value: "",
              name: "全部"
            },
            ...React.$enums.keywordTyoe
          ]
        }
      ]


    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'id',
              render: text => <a><Checkbox></Checkbox></a>,
            },
            {
              title: 'id',
              dataIndex: 'id',
            },
            {
              title: '名称',
              dataIndex: 'name',
            },{
                title: '分类',
                dataIndex: 'nickname',
                render: text => <a>{text}</a>,
              },
              {
                title: '频道',
                dataIndex: 'email',
              },
              {
                title: '属性',
                dataIndex: 'last_login_time',
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
            pagesize: 10,
            coding: 'O0003'
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
                    <li>关键词库管理</li>
                    <li className="search"><Condition /></li>
                  </ul>
                  <Option option={this.option} select={this.props.select} coding="P0003" />
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
    module: state.tag
  }
}

export default connect(stateToProops, dispatchToProps)(TagList)
