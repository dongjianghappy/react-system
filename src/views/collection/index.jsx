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

class Collection extends React.Component{

    componentDidMount(){
      this.props.select({
        data: {
          page: 0,
          pagesize: 10,
          coding: "O0008"
        },
        node: "nodeList"            
    })
    }

    handleClick = (data) => {
      this.props[data.dispatch](data)
    }     
    
    render(){
      const { nodeList } = this.props.module
        return (
            <div>
              <Card>

              <div style={{marginBottom: 15}}>
                <Space>
                  <Button type="primary">采集列表</Button>
                  <Button type="primary">选择节点类型</Button>
                </Space>
              </div>
              
              <table width="100%" class="table-striped artlist col-left-3">
                <tr class="th">
                  <td class="col-md-1">选择</td>
                  <td class="col-md-1">顺序</td>
                  <td class="col-md-4">节点名称</td>
                  <td class="col-md-2">创建节点日期</td>
                  <td class="col-md-2">入库时间</td>
                  <td class="col-md-2">操作</td>
                </tr>
                {
                      nodeList && nodeList.map((item, index) => (
                        <tr>
                          <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                          <td>{item.sort}</td>
                          <td>{item.name}</td>
                          <td>{item.content}</td>
                          <td>{item.datetime}</td>
                          <td>
                          开始采集 | 内容 | 删除
                          </td>
                          
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
  return {
    module: state.collection
  }
}

export default connect(stateToProops, dispatchToProps)(Collection)
