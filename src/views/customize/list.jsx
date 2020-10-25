import React from 'react'
import { Card, Table, Space, Popconfirm, Button, Checkbox, Switch, Pagination, Row, Col} from 'antd';
import { connect } from 'react-redux'
import { Status, Dialog, ButtonGroup, OperatingGroup, Operatinavbar, Condition } from '../../components/index.js'
import FieldForm from './fieldForm'
import AddArticle from './article'
import dispatchToProps from '../../store/dispatch'
import api from '../../api';

class CustomizeList extends React.Component{
    
    state ={
        columns: [
            {
              title: '注释',
              dataIndex: 'remark',
            },
            {
              title: '字段名',
              dataIndex: 'field',
            },
            {
              title: '数据类型',
              dataIndex: 'dtype',
            },
            {
                title: '长度',
                dataIndex: 'length'
              },
            {
                title: '显示类型',
                dataIndex: 'text_type'
              },   
              
            {
                title: '模型',
                dataIndex: 'text_type'
              },
              {
                title: '操作',
                dataIndex: 'operating',
                render: text => (<div><FieldForm type="edit" butName="编辑" title="编辑字段" /> <a>删除</a></div>),
              },
        ],
        data: [],
        total: 0,
        pages: 0,
        list: [],
        allChecked: true
    }

    componentDidMount(){
      this.props.getAnpassenField({
        
      })
    }
    componentDidMount(){
      this.props.select({
        api: 'anpassen_field',
        data: {
          id: 2
        },
        node: "fieldList"            
      })
    }

    render(){

      const {columns} = this.state
      const { fieldList } = this.props.module

        return (
            <div>
                <Card
                title="字段管理"
                extra={
                  <Space>
                  <FieldForm size="defualt" butName="新增字段" title="新增字段" />
                  </Space>
                }
                >
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={fieldList}
                    pagination={ false }
                />
                <input id="coding" type="hidden" value="P0003" />
                </Card>
            </div>
        )
    }
}

const stateToProops = (state) => {
  return {
    module: state.customize
  }
}

export default connect(stateToProops, dispatchToProps)(CustomizeList)
