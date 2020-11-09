import React from 'react'
import { Card, Table, Space, Row, Col} from 'antd';
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

class CollectionList extends React.Component{

    componentDidMount(){
      this.props.select({
        data: {
          page: 0,
          pagesize: 10,
          coding: "O0009"
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
              <Card title="采集列表">
                <table width="100%" class="table-striped artlist col-left-23">
                <tr class="th">
                  <td class="col-md-1">选择</td>
                  <td class="col-md-4">标题</td>
                  <td class="col-md-2">节点</td>
                  <td class="col-md-2">入库时间</td>
                  <td class="col-md-2">状态</td>
                  <td class="col-md-1">操作</td>
                </tr>
                {
                      nodeList && nodeList.map((item, index) => (
                        <tr>
                          <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                          <td>{item.title}</td>
                          <td>{item.content}</td>
                          <td>{item.datetime}</td>
                          <td><Status type="switch" coding="Q0004" field="status" {...item} updateStatus={this.props.updateStatus} /></td>
                          <td>删除</td>
                          
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
    global: state.common.global,
    state,
    module: state.collection
  }
}

export default connect(stateToProops, dispatchToProps)(CollectionList)
