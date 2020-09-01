import React from 'react'
import { Card, Table, Space, Popconfirm, Button, Checkbox, Switch, Pagination, Row, Col} from 'antd';
import { connect } from 'react-redux'
import { Status, Dialog, ButtonGroup, OperatingGroup, Operatinavbar, Condition } from '../../components/index.js'
import AddArticle from './article'
import dispatchToProps from '../../store/actions'
import api from '../../api';

class Spread extends React.Component{
    
    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
              render: text => <a><Checkbox></Checkbox></a>,
            },
            {
              title: '顺序',
              dataIndex: 'sort',
            },
            {
              title: '推广名称',
              dataIndex: 'name',
            },
            {
                title: '推广链接',
                dataIndex: 'url',
                render: text => <a>{text}</a>,
              },              
            {
                title: '价格(元/月)',
                dataIndex: 'price',
                render: text => <a>{text}</a>,
              },
            {
                title: '日期',
                dataIndex: 'datetime',
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
                dataIndex: 'operating',
                render: (text, record) => (
                  <Space>
                  <Dialog butName="编辑" title="更改友链">
                  <AddArticle />
                  </Dialog>
                  <Popconfirm 
                  title="确定删除此项" 
                  onCancel={()=>console.log("sss")} 
                  onConfirm={()=>{
                    
                  }} >
                    <Button type="default" size="small">删除</Button>
                  </Popconfirm>
                </Space>
                  ),
              },
        ],
        data: [],
        total: 0,
        pages: 0,
        list: [],
        allChecked: true
    }

    componentDidMount(){
      this.props.getListAction()
    }

    render(){

      const {columns} = this.state
      const {list, total, pages} = this.props.list
      
        return (
            <div>
                <Card title="推广管理" extra={
                  <div>
                  <Space>
                <Condition />
                <Dialog type="primary" size="defualt" butName="新增内容" title="新增内容" >
                  <AddArticle />
                </Dialog>
                </Space>
                </div>
            }>
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={list}
                    pagination={ false }
                />
                <Operatinavbar total={total} />
                <input id="coding" type="hidden" value="P0006" />
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

export default connect(stateToProops, dispatchToProps)(Spread)
