import React from 'react'
import { Card, Table, Space, Popconfirm, Button, Checkbox, Switch, Pagination, Row, Col} from 'antd';
import { connect } from 'react-redux'
import { Status, Dialog, ButtonGroup, OperatingGroup, Operatinavbar, Condition, R_checkbox} from '../../components/index.js'
import AddArticle from './article'
import dispatchToProps from '../../store/dispatch'
import api from '../../api';
import { Link } from 'react-router-dom';

class Customize extends React.Component{
    
    state ={
        columns: [
            {
              title: '',
              dataIndex: 'name',
            },
            {
              title: '',
              dataIndex: 'id',
            },
            {
              title: '',
              dataIndex: 'module',
            },
            {
                title: '',
                dataIndex: 'source',
                render: text => <a>p_addonnews</a>,
              },
            {
                title: '状态',
                dataIndex: 'type',
                render: text => <a>启用|禁用</a>,
              },   
              
            {
                title: '',
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
                <Card title="内容模型管理">
                <table width="100%" class="table-striped artlist col-left-1">
                <tr class="th">
                  <td class="col-md-3">频道名称</td>
                  <td class="col-md-1">频道ID</td>
                  <td class="col-md-1">识别id</td>
                  <td class="col-md-2">附加表</td>
                  <td class="col-md-1">状态</td>
                  <td class="col-md-2">模型</td>
                  <td class="col-md-2">操作</td>
                </tr>
                {
                      modelList && modelList.map((item, index) => (
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.id}</td>
                          <td>{item.module}</td>
                          <td>{item.source}</td>
                          <td>{item.type}</td>
                          <td>{item.type}</td>
                          <td><Link to={{pathname:'/admin/customize/list', state:{id: item.id}}}>字段管理</Link></td>
                          
                        </tr>
                        ))
                      }
              </table>
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
