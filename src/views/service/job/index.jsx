import React from 'react'
import { Card, Table, Button } from 'antd'
import { Link } from 'react-router-dom'

export default class Manager extends React.Component{

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
              title: '	职位名称',
              dataIndex: 'title',
            },
            {
                title: '部门',
                dataIndex: 'datetime',
                render: text => <a>{text}</a>,
              },
            {
                title: '人数',
                dataIndex: 'type',
                render: text => <a>{text}</a>,
              },   

             {
                title: '发布时间',
                dataIndex: 'datetime',
                render: text => <a>{text}</a>,
              },
            {
                title: '状态',
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
            title="职位管理"
            extra={
                <Link to="/admin/service/job/article">新增职位</Link>
              }
            >
                <Table
                    columns={columns}
                ></Table>

            </Card>
        )
    }
}