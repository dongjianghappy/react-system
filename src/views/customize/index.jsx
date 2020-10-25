import React from 'react'
import { Card, Table, Space, Popconfirm, Button, Checkbox, Switch, Pagination, Row, Col} from 'antd';
import { connect } from 'react-redux'
import { Status, Dialog, ButtonGroup, OperatingGroup, Operatinavbar, Condition } from '../../components/index.js'
import AddArticle from './article'
import dispatchToProps from '../../store/dispatch'
import api from '../../api';
import { Link } from 'react-router-dom';

class Customize extends React.Component{
    
    state ={
        columns: [
            {
              title: '频道名称',
              dataIndex: 'name',
            },
            {
              title: '频道ID',
              dataIndex: 'id',
            },
            {
              title: '识别id',
              dataIndex: 'module',
            },
            {
                title: '附加表',
                dataIndex: 'source',
                render: text => <a>p_addonnews</a>,
              },
            {
                title: '状态',
                dataIndex: 'type',
                render: text => <a>启用|禁用</a>,
              },   
              
            {
                title: '模型',
                dataIndex: 'price',
                render: text => <a>自动</a>,
              },
              {
                title: '操作',
                dataIndex: 'operating',
                render: (text, record) => <Link to={`/admin/customize/list/${record.id}`}>字段管理</Link>,
              },
        ],
        data: [],
        total: 0,
        pages: 0,
        list: [],
        allChecked: true
    }

    componentDidMount(){
      this.props.select({
        api: 'anpassen',
        node: "modelList"           
      })
    }

    render(){
      const {columns} = this.state
      const { modelList } = this.props.module
        return (
            <div>
                <Card
                title="内容模型管理"
                >
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={ modelList }
                    pagination={ false }
                />
                <input id="coding" type="hidden" value="P0003" />
                </Card>
            </div>
        )
    }
}

const stateToProops = (state) => {
  console.log(state);
  return {
    module: state.customize
  }
}

export default connect(stateToProops, dispatchToProps)(Customize)
