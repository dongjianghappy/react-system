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
              title: 'ID',
              dataIndex: 'id',
            },
            {
              title: '	标题',
              dataIndex: 'title',
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
            title="公告通知列表"
            extra={
                <Button type="primary">发布公告通知</Button>
              }
            >
                撒旦撒旦

            </Card>
        )
    }
}