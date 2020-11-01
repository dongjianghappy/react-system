import React from 'react'
import { Card, Table, Space} from 'antd';
import { connect } from 'react-redux'
import {
  Status,
  R_button,
  R_checkbox,
  Dialog,
  Condition,
  R_drawer,
  Quick
} from '../../components/index.js'
import {
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup,
  Operatinavbar
} from '../../common'
import Article from './article'
import dispatchToProps from '../../store/dispatch'

class Partner extends React.Component{
  
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
              title: '伙伴名称',
              dataIndex: 'name',
            },
              {
                title: '状态',
                dataIndex: 'status',
                render:(text, record) => (
                  <Status type="switch" coding="P0005" field="status" {...record} updateStatus={this.props.updateStatus} />
                )
              },
              {
                title: '操作',
                dataIndex: 'operating',
                render: (text, record) => (
                  <Space>
                    <R_button.edit click={this.handleClick} id={record.id} action="edit" title="伙伴编辑" dispatch="popup" node="drawer" />
                    <R_button.del click={this.handleClick} id={record.id} title="删除伙伴" dispatch="popup" node="dialog" fn="getDelete" />
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
          pagesize: 25,
          coding: "P0005"
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
                <ModalGroup {...this.props} article={Article} coding="P0005" />
                
                <div style={{marginBottom: 15}}>
                  <ul className="navbar">
                    <li>伙伴管理</li>
                    <li><R_button.link click={this.handleClick} action="add" name="新增伙伴" title="新增伙伴" dispatch="popup" node="drawer" /></li>
                    <li className="search"><Condition /></li>
                  </ul>
                  <Option option={this.option} select={this.props.select} coding="P0005" />
                </div>

                <Card>
                <table width="100%" className="table-striped table-hover col-left-3">
                  <tr className="th">
                    <td className="col-md-1">选择</td>
                    <td className="col-md-1">顺序</td>
                    <td className="col-md-7">伙伴名称</td>
                    <td className="col-md-1">状态</td>
                    <td className="col-md-2">操作</td>
                  </tr>
                  {
                  list && list.map((item, index) => (
                  <tr class="tr-list">
                    <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                    <td>
                      <Quick id={item.id} title={item.sort} field="sort" coding="P0005" changeData={this.props.changeData}/>
                    </td>
                    <td>
                    <Quick id={item.id} title={item.name} field="name" width="50%" coding="P0005" changeData={this.props.changeData}/>
                    </td>
                    <td><Status type="switch" coding="P0005" field="status" {...item} updateStatus={this.props.updateStatus} /></td>
                    <td>
                      <Space>
                      <R_button.edit click={this.handleClick} id={item.id} action="edit" title="伙伴编辑" dispatch="popup" node="drawer" />
                      <R_button.del click={this.handleClick} id={item.id} title="删除伙伴" dispatch="popup" node="dialog" fn="getDelete" />
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
                  coding="P0005"
                  {...this.props}
                />
                <input id="coding" type="hidden" value="P0005" />
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
    module: state.partner
  }
}

export default connect(stateToProops, dispatchToProps)(Partner)
