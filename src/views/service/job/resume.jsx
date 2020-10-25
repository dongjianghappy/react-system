import React from 'react'
import { Card, Table, Button } from 'antd'

export default class Article extends React.Component{

    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
            },
            {
              title: '编号',
              dataIndex: 'id',
            },
            {
              title: '姓名',
              dataIndex: 'title',
            },
            {
                title: '性别',
                dataIndex: 'datetime',
                render: text => <a>{text}</a>,
              },
            {
                title: '年龄',
                dataIndex: 'type',
                render: text => <a>{text}</a>,
              },   
              {
                title: '专业',
                dataIndex: 'datetime',
                render: text => <a>{text}</a>,
              },
            {
                title: '职位',
                dataIndex: 'type',
                render: text => <a>{text}</a>,
              },  
              {
                title: '申请时间',
                dataIndex: 'type',
                render: text => <a>{text}</a>,
              }, 
            {
                title: '操作',
                dataIndex: 'price',
                render: text => <a>{text}</a>,
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
            title="求职简历"
            >
                <Table
                    columns={columns}
                ></Table>
            </Card>
        )
    }
}