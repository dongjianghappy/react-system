import React from 'react'
import { Card, Table, Space, Row, Col, Button} from 'antd';
import { connect } from 'react-redux'
import {
  Status,
  R_checkbox,
  R_drawer,
  R_button,
  Dialog,
  Condition
} from '../../components/index.js'
import {
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup
} from '../../common'
import dispatchToProps from '../../store/dispatch'

class Mysql extends React.Component{

    componentDidMount(){
      this.props.select({
        api: 'mysql',
        node: "list"            
      })
    }

    handleClick = (data) => {
        this.props[data.dispatch](data)
      }    
    
    render(){
      const { list } = this.props.module
        return (
            <Card>
                <div style={{marginBottom: 15}}>
                  <Space>
                    <Button type="primary">数据库列表</Button>
                    <Button type="primary">备份管理</Button>
                  </Space>
                </div>

                <table width="100%" class="table-striped table-hover artlist col-left-2">
            <tr class="th">
                <td class="col-md-1 align-center">选择</td>
                <td class="col-md-2">数据库表</td>
                <td class="col-md-1">类型</td>
                <td class="col-md-1">记录</td>
                <td class="col-md-1">整理</td>
                <td class="col-md-1">大小</td>
                <td class="col-md-1">多余</td>
                <td class="col-md-2">创建时间</td>
                <td class="col-md-1 align-center">操作</td>
            </tr>
            {
              list && list.map((item, index) => (
                <tr>
                  <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                  <td>{item.dbname} {item.remark}</td>
                  <td>{item.dbtype}</td>
                  <td>{item.dbrow}</td>
                  <td>{item.dbcharset}</td>
                  <td>{item.dbsize}</td>
                  <td> - </td>
                  <td>{item.dbtime}</td>
                  <td>
                    备份 | 还原
                  </td>
                  
                </tr>
                ))
              }
        </table>
                <ButtonGroup {...this.props}></ButtonGroup>
                <input id="coding" type="hidden" value="P0003" />
            </Card>
        )
    }
}

const stateToProops = (state) => {
  return {
    module: state.mysql
  }
}

export default connect(stateToProops, dispatchToProps)(Mysql)
