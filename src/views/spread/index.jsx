import React from 'react'
import { Card, Table, Space, Popconfirm, Button, Checkbox, Switch, Pagination, Row, Col} from 'antd';
import { connect } from 'react-redux'
import { Status,
  Dialog,
  R_checkbox,
  R_button,
  Operatinavbar,
  Condition,
  R_drawer,
  Quick
} from '../../components/index.js'
import {
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup
} from '../../common'
import Article from './article'
import dispatchToProps from '../../store/dispatch'


class Spread extends React.Component{
    
  option = [
    {
      name: "状态",
      field: 'status',
      list: [
        {
          val: "",
          name: "全部"
        },
        {
          value: "1",
          name: "开启"
        },
        {
          value: "0",
          name: "关闭"
        }
      ]
    },
  ]

    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
              render: (text, record) => (
                <R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={record.id}></R_checkbox>
              ),
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
                  <Status type="switch" coding="P0006" field="status" {...record} updateStatus={this.props.updateStatus} />
                )
              },
              {
                title: '操作',
                dataIndex: 'operating',
                render: (text, record) => (
                  <Space>
                  <R_button.edit click={this.handleClick} id={record.id} action="edit" title="编辑友链" dispatch="popup" node="drawer" />
                  <R_button.del click={this.handleClick} id={record.id} title="删除推广" dispatch="popup" node="dialog" fn="getDelete" />
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
      this.props.select({
        data: {
          page: 0,
          pagesize: 10,
          coding: "P0006"
        }            
    })
    }

    handleClick = (data) => {
      this.props[data.dispatch](data)
    } 

    render(){

      const {columns} = this.state
      const {list, total, pages} = this.props.module
      
        return (
            <div>
                <ModalGroup {...this.props} article={Article} coding="P0006" />

                <div style={{marginBottom: 15}}>
                  <ul className="navbar">
                    <li>推广管理</li>
                    <li><R_button.link click={this.handleClick} action="add" name="新增推广" title="新增推广" dispatch="popup" node="drawer" /></li>
                    <li className="search"><Condition /></li>
                  </ul>
                  <Option option={this.option} select={this.props.select} coding="P0006" />
                </div>
                
                <Card>
                <table width="100%" class="table-striped table-hover col-left-34">
                  <tr>
                    <td className="col-md-1">选择</td>
                    <td className="col-md-1">顺序</td>
                    <td className="col-md-2">推广名称</td>
                    <td className="col-md-3">推广链接</td>
                    <td className="col-md-1">价格(元/每月)</td>
                    <td className="col-md-2">时间</td>
                    <td className="col-md-1">状态</td>
                    <td className="col-md-1">操作</td>
                  </tr>
                  {
                    list && list.map((item, index) => (
                    <tr class="tr-list">
                      <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                      <td><Quick id={item.id} title={item.sort} field="sort" coding="P0006" changeData={this.props.changeData}/></td>
                      <td><Quick id={item.id} title={item.name} field="name" coding="P0006" changeData={this.props.changeData}/></td>
                      <td><Quick id={item.id} title={item.url} field="url" coding="P0006" changeData={this.props.changeData}/></td>
                      <td>{item.price}</td>
                      <td>{item.datetime}</td>
                      <td><Status type="switch" coding="P0006" field="status" {...item} updateStatus={this.props.updateStatus} /></td>
                      <td>
                      <Space>
                  <R_button.edit click={this.handleClick} id={item.id} action="edit" title="编辑友链" dispatch="popup" node="drawer" />
                  <R_button.del click={this.handleClick} id={item.id} title="删除推广" dispatch="popup" node="dialog" fn="getDelete" />
                </Space>
                      </td>
                    </tr>
                    ))
                  }
                </table>
                </Card>
                <ButtonGroup {...this.props} button={['all', 'delete', 'open', 'close']} ></ButtonGroup>
                <input id="coding" type="hidden" value="P0006" />
            </div>
        )
    }
}

const stateToProops = (state) => {
  console.log(state);
  return {
    global: state.common.global,
    state,
    module: state.spread
  }
}

export default connect(stateToProops, dispatchToProps)(Spread)
