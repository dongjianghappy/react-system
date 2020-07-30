import React from 'react';
import { Card, Table, Checkbox } from 'antd'
import { createStore } from 'redux'
import { Link } from 'react-router-dom'
import { Status, Dialog, ButtonGroup, OperatingGroup, Operatinavbar, Condition } from '../../components/index.js'
import reducer from '../../reducers/counter'

// 创建仓库
const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))

export default class index extends React.Component{
     
    state ={
        columns: [
            {
              title: '频道',
              dataIndex: 'name',
            },
            {
              title: '频道首页',
              dataIndex: 'url',
            },
            {
                title: '频道链接',
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
                title: '列表',
                dataIndex: 'price',
                render: text =>(
                    <div>
                        <Link to="/admin/navigation/main">导航列表</Link>
                        <Link to="/admin/navigation/single">单页列表</Link>
                    </div>
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
                <Card title="导航首页">
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