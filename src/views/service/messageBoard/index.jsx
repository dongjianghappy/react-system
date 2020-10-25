import React from 'react'
import { Card, Table, Button, Space } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import dispatchToProps from '@/store/dispatch'
import {
  Status,
  R_checkbox,
  R_drawer,
  R_button,
  Dialog,
  Condition
} from '../../../components/index.js'
import {
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup
} from '../../../common'

class Index extends React.Component{

    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
            },
            {
              title: '用户',
              dataIndex: 'nickname',
            },
            {
              title: '	内容',
              dataIndex: 'content',
            },
            {
              title: '状态',
              dataIndex: 'checked',
              render: text => <a>审核通过</a>,
            },
            {
                title: '发布时间',
                dataIndex: 'datetime',
                render: text => <a>{text}</a>,
              },
            {
                title: '操作',
                dataIndex: 'price',
                render: (text, record) => (
                  <div>
                    <Space>
                      <R_button.edit click={this.handleClick} id={record.id} action="edit" title="回复" dispatch="popup" node="drawer" />
                      <R_button.del click={this.handleClick} id={record.id} title="删除留言" dispatch="popup" node="dialog" fn="getDelete" />
                    </Space>
                  </div>
                ),
              }
        ],
        data: [],
        total: 0,
        pages: 0
    }

    componentDidMount(){
      this.props.getListAction()
    }
    

    render() {

        const { columns } = this.state
        const {list } = this.props
        return (
            <Card title="留言列表">
                <Table
                    columns={columns}
                    dataSource={list}
                ></Table>
              <input id="coding" type="hidden" value="Q0004" />
            </Card>
        )
    }
}

const stateToProops = (state) => {
  return {
    module: "service",
    state,
    common: state.common,
    global: state.common.global,
    list: state.service.list
  }
}

export default connect(stateToProops, dispatchToProps)(Index)
