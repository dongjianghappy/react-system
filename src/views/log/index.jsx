import React from 'react'
import { Card, Table } from 'antd'

export default class Manager extends React.Component{

    state ={
        columns: [
            {
              title: '登录账号',
              dataIndex: 'name',
            },
            {
              title: '类型',
              dataIndex: 'name',
            },
            {
              title: '浏览器类型',
              dataIndex: 'url',
            },
            {
                title: '语言',
                dataIndex: 'source',
                render: text => <a>{text}</a>,
              },
            {
                title: '操作系统',
                dataIndex: 'type',
                render: text => <a>{text}</a>,
              },   
              
            {
                title: 'IP',
                dataIndex: 'price',
                render: text => <a>{text}</a>,
              },
            {
                title: '地区',
                dataIndex: 'datetime',
                render: text => <a>{text}</a>,
              },                

              
              {
                title: '登录时间',
                dataIndex: 'status'
              }
        ],
        data: [],
        total: 0,
        pages: 0
    }

    render() {

        const { columns } = this.state

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
                    columns={columns}
                ></Table>

            </Card>
        )
    }
}