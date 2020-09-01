import React from 'react'
import { Card, Table, Space, Popconfirm, Button, Checkbox, Switch, Pagination, Row, Col} from 'antd';
import { connect } from 'react-redux'
import { Status, Dialog, ButtonGroup, OperatingGroup, Operatinavbar, Condition } from '../../components/index.js'
import AddArticle from './article'
import dispatchToProps from '../../store/actions'
import api from '../../api';

class Links extends React.Component{
    
    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
              render: text => <a><Checkbox></Checkbox></a>,
            },
            {
              title: '网站名称',
              dataIndex: 'name',
            },
            {
              title: '链接地址',
              dataIndex: 'url',
            },
            {
                title: '来源',
                dataIndex: 'source',
                render: text => <a>{text}</a>,
              },
            {
                title: '类型',
                dataIndex: 'type',
                render: text => <a>{text}</a>,
              },   
              
            {
                title: '价格(元/月)',
                dataIndex: 'price',
                render: text => <a>{text}</a>,
              },
            {
                title: '结束日期',
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
                    <OperatingGroup><AddArticle /></OperatingGroup>
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
                <Card
                tabList={[
                  {
                    key: 'tab1',
                    tab: '出售链接',
                  },
                  {
                    key: 'tab2',
                    tab: '交换链接',
                  },
                ]}

                tabBarExtraContent={
                  <div>
                    <Space>
                  <Condition />
                  <Dialog type="primary" size="defualt" butName="新增友链" title="新增友链" >
                    <AddArticle />
                  </Dialog>
                  </Space>
                  </div>
                }
            >
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={list}
                    pagination={ false }
                />
                <Operatinavbar total={total} />
                <input id="coding" type="hidden" value="P0003" />
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

export default connect(stateToProops, dispatchToProps)(Links)
