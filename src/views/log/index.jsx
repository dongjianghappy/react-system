import React from 'react'
import { Card, Table } from 'antd'

import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
class Manager extends React.Component{

    state ={
        columns: [
            {
              title: '登录账号',
              dataIndex: 'username',
            },
            {
              title: '类型',
              dataIndex: 'grade',
            },
            {
              title: '浏览器类型',
              dataIndex: 'browser',
            },
            {
                title: '语言',
                dataIndex: 'lang'
              },
            {
                title: '操作系统',
                dataIndex: 'system',
              },   
              
            {
                title: 'IP',
                dataIndex: 'ip',
              },
            {
                title: '地区',
                dataIndex: 'area',
              },                

              
              {
                title: '登录时间',
                dataIndex: 'login_time'
              }
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
          coding: "U0006"
        },        
      })
    }


    render() {

        const { columns } = this.state
        const { list } = this.props.module
        return (
            <Card
                tabList={[
                    {
                      key: 'tab1',
                      tab: '管理员登录日志',
                    },
                    {
                      key: 'tab2',
                      tab: '用户登录日志',
                    },
                  ]}
            >
                  <Table
                      key="id"
                      columns={columns}
                      dataSource={list}
                      pagination={ false }
                  ></Table>

            </Card>
        )
    }
}

const stateToProops = (state) => {
  return {
      module: state.log
  }
}

export default connect(stateToProops, dispatchToProps)(Manager)