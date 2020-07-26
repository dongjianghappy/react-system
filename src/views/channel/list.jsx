import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Table, Space, Checkbox, Button} from 'antd';
import api from '../../api'

export default class List extends React.Component{

    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
              render: text => <a><Checkbox></Checkbox></a>,
            },
            {
              title: '编号',
              dataIndex: 'id',
            },
            {
              title: '名称',
              dataIndex: 'title',
            },
            {
                title: '分类',
                dataIndex: 'parent',
                render: text => <a>{text}</a>,
            },
            {
                title: '下载',
                dataIndex: 'dowmload'
            },
            {
                title: '发布时间',
                dataIndex: 'datetime',
                render: text => <a>{text}</a>,
            },
            {
                title: '状态',
                dataIndex: 'status',
            },
            {
            title: '操作',
            dataIndex: 'operating',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => `/sucai/article/edit/${record.id}`}>编辑</Button>
                    <Button>删除</Button>
                    <Button type="link">更多</Button>
                    <a></a>
                </Space>
                ),
            },
        ],
        data: [],
        total: 0,
        pages: 0
    };

    componentDidMount(){
      api.select({
        m: 'vue',
        coding: 'K0000',
        n: 'articleList',
        page: 0,
        pagesize: 10
      }).then(res => {
          debugger
        this.setState({
            data: res.result.list,
            total: res.result.total,
            pages: res.result.pages
        })
      })

      
    }

    render(){
        const {columns, data, total} = this.state
        return(
            <Card title="资源管理"
                extra={
                    (
                    <div>
                        <Button type="default">正在审核</Button>
                        <Button type="default">已退回</Button>
                        <Button type="default">发布稳定</Button>
                    </div>
                    )
                }
            >
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{total, defaultPageSize: 10, onChange: this.itemRender}}
                />
            </Card>
        )
    }
}