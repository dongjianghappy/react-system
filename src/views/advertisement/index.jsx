import React from 'react'
import { Card, Table, Space, Checkbox} from 'antd';
import {
  Status,
  Dialog,
  Condition,
  R_button,
  R_checkbox,
  R_drawer,
  Quick
} from '../../components/index.js'
import {
  ButtonGroup,
  Option,
  ModalGroup,
  Operatinavbar
} from '../../common'
import { connect } from 'react-redux'
import Article from './article'
import dispatchToProps from '../../store/dispatch'


class Advertisement extends React.Component{
    
  option = [
    {
      name: "来源",
      field: 'source',
      list: [
        {
          value: "",
          name: "全部"
        },
        ...React.$enums.adSource
      ]
    },
    {
      name: "显示",
      field: 'display',
      list: [
        {
          value: "",
          name: "全部"
        },
        ...React.$enums.adDisplay
      ]
    },
    {
      name: "类型",
      field: 'type',
      list: [
        {
          value: "",
          name: "全部"
        },
        ...React.$enums.adType
      ]
    },
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
                  <Status type="switch" coding="P0008" field="status" {...record} updateStatus={this.props.updateStatus} />
                )
              },
              {
                title: '操作',
                dataIndex: 'operating',
                render: (text, record) => (
                  <Space>
                    <R_button.edit click={this.handleClick} id={record.id} action="edit" title="广告编辑" dispatch="popup" node="drawer" />
                    <R_button.del click={this.handleClick} id={record.id} title="删除广告" dispatch="popup" node="dialog" fn="getDelete" />
                  </Space>
                  ),
              },
        ],
        data: [],
        total: 0,
        pages: 0
    }

    componentDidMount(){
      this.props.select({
        data: {
          page: 0,
          pagesize: 25,
          coding: "P0008"
        }            
    })
    }

    handleClick = (data) => {
      this.props[data.dispatch](data)
    }    

    render(){

        const {columns, data} = this.state
        const {list, total, pages} = this.props.module

        return (
            <div>
                <ModalGroup {...this.props} article={Article} coding="P0008" />

                <div style={{marginBottom: 15}}>
                  <ul className="navbar">
                    <li>广告管理</li>
                    <li><R_button.link click={this.handleClick} action="add" name="新增广告" title="新增广告" dispatch="popup" node="drawer" /></li>
                    <li>生成JSON文件</li>
                    <li className="search"><Condition /></li>
                  </ul>
                  <Option option={this.option} select={this.props.select} coding="P0008" />
                  
                </div>

                <Card>
                  <table width="100%" className="table-striped table-hover col-left-2">
                    <tr>
                      <td className="col-md-1">选择</td>
                      <td className="col-md-2">广告名称</td>
                      <td className="col-md-1">尺寸类型</td>
                      <td className="col-md-2">广告位置</td>
                      <td className="col-md-1">每月/元</td>
                      <td className="col-md-2">时间</td>
                      <td className="col-md-1">状态</td>
                      <td className="col-md-2">操作</td>
                    </tr>
                    {
                  list && list.map((item, index) => (
                    <tr className="tr-list">
                      <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                      <td><Quick id={item.id} title={item.name} field="name" coding="P0005" changeData={this.props.changeData}/></td>
                      <td>{item.size_type}</td>
                      <td>{item.size}</td>
                      <td>{item.price}</td>
                      <td>{item.last_time}</td>
                      <td><Status type="switch" coding="P0008" field="status" {...item} updateStatus={this.props.updateStatus} /></td>
                      <td>
                        <Space>
                          <R_button.edit click={this.handleClick} id={item.id} action="edit" title="广告编辑" dispatch="popup" node="drawer" />
                          <R_button.del click={this.handleClick} id={item.id} title="删除广告" dispatch="popup" node="dialog" fn="getDelete" />
                        </Space>
                      </td>
                    </tr>
                    ))
                  }
                  </table>
                
                <Operatinavbar 
                  node={ this.props.node }
                  button={['all', 'delete', 'open', 'close']}
                  data={this.props.module}
                  coding="P0008"
                  {...this.props}
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
    global: state.common.global,
    state,
    module: state.advertisement
  }
}

export default connect(stateToProops, dispatchToProps)(Advertisement)