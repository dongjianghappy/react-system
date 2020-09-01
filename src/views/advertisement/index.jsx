import React from 'react'
import { Card, Table, Space, Popconfirm, Button, Checkbox, Switch} from 'antd';
import { Status, Dialog, Condition } from '../../components/index.js'
import { connect } from 'react-redux'
import AddArticle from './article'
import dispatchToProps from '../../store/actions'
import { getListAction } from '../../store/action'
import store from '../../store';
import api from '../../api';

class Advertisement extends React.Component{
    

    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
              render: text => <a><Checkbox></Checkbox></a>,
            },
            {
              title: '广告名称',
              dataIndex: 'name',
            },
            {
              title: '尺寸类型',
              dataIndex: 'url',
            },
            {
                title: '广告位置',
                dataIndex: 'source',
                render: text => <a>{text}</a>,
              },
            {
                title: '每月/元',
                dataIndex: 'type',
                render: text => <a>{text}</a>,
              },   
            {
                title: '时间',
                dataIndex: 'datetime',
                render: text => <a>{text}</a>,
              },                

              
              {
                title: '状态',
                dataIndex: 'status',
                render:(text, record) => (
                  <Status {...record} />
                  // <Switch 
                  //   checkedChildren="开启" 
                  //   unCheckedChildren="关闭"
                  //   defaultChecked={record.status === '1' ? true : false}
                  //   onChange={() => {
                  //     api.updateStatus({
                  //       coding: 'K0002',
                  //       id: record.id,
                  //       status: 'status'
                  //     })
                  //   }} />
                )
              },
              {
                title: '操作',
                dataIndex: 'operating',
                render: (text, record) => (
                    <Space size="middle">
                      <Dialog butName="编辑" title="更改广告">
                        <AddArticle />
                      </Dialog>
                      <Popconfirm 
                      title="确定删除此项" 
                      onCancel={()=>console.log("sss")} 
                      onConfirm={()=>{
                        api.delete({
                          coding: 'K0002',
                          id: record.id
                        }).then(res => {
                          // 删除完成后再进行刷新页面
                          this.itemRender()
                        })
                      }} >
                        <Button type="default" size="small">删除</Button>
                      </Popconfirm>
                      <Button type="default" size="small">生成订单</Button>
                    </Space>
                  ),
              },
        ],
        data: [],
        total: 0,
        pages: 0
    }

    componentDidMount(){
      this.props.getListAction()
    }

    render(){

        const {columns, data} = this.state
        const {list, total, pages} = this.props.list

        return (
            <div>
                <Card title="所以广告" extra={
                  <div>
                  <Space>
                <Condition />
                <Dialog type="primary" size="defualt" butName="新增广告" title="新增广告" >
                  <AddArticle />
                </Dialog>
                </Space>
                </div>
            }>
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={list}
                />
                <input id="coding" type="hidden" value="P0008" />
                </Card>
            </div>
        )
    }
}

const stateToProops = (state) => {
  console.log(state);
  return {
      inputValue: state.inputValue,
      list: state.common.list
  }
}

export default connect(stateToProops, dispatchToProps)(Advertisement)