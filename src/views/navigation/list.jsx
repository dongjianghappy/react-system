import React from 'react';
import {Space, Card, Table, Checkbox, Button } from 'antd'
import { createStore } from 'redux'
import { Link } from 'react-router-dom'
import { Status, Dialog, ButtonGroup, OperatingGroup, Operatinavbar, Condition } from '../../components/index.js'
import reducer from '../../reducers/counter'
import AddSingle from './components/addSingle'

// 创建仓库
const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))

export default class index extends React.Component{
     
    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
            },
            {
              title: '顺序',
              dataIndex: 'url',
            },
            {
                title: '名称',
                dataIndex: 'source',
                render: text => <a>{text}</a>,
              },
            {
              title: '路径',
              dataIndex: 'name',
            },
            {
              title: '文件',
              dataIndex: 'url',
            },
            {
                title: '标识',
                dataIndex: 'source',
                render: text => <a>{text}</a>,
              },              
              {
                title: '状态',
                dataIndex: 'status',
                render:(text, record) => (
                  <Status type="switch" coding="P0003" field="status" {...record} updateStatus={this.props.updateStatus} />
                )
              },
            {
                title: '操作',
                dataIndex: 'price',
                render: text =>(
                    <OperatingGroup />
                ),
              }
        ],
        data: [{
                name: "素材",
                url: "素材",
                source: "素材",
                type: "素材",
                price: "素材",
                id: 1
            },
            {
                name: "素材",
                url: "素材",
                source: "素材",
                type: "素材",
                price: "素材",
                id: 2
            },
            {
                name: "素材",
                url: "素材",
                source: "素材",
                type: "素材",
                price: "素材",
                id: 3
            }
        ],
        total: 0,
        pages: 0
    }


    render(){

        const { columns, data } = this.state

        return(

            <div>
            <Card title="单页列表" extra={
                <Space>
                <Dialog type="text" butName="新增单页" title="新增单页">
                  <AddSingle />
                </Dialog>
                <Button onClick={()=>this.props.history.push('/admin/navigation')}>返回</Button>
                </Space>
              }>
                    <Table
                        key="id"
                        columns={columns}
                        dataSource={data}
                        pagination={ false }
                    ></Table>
                </Card>
            </div>
        )
    }
}