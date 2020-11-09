import React from 'react'
import { Card, Table, Space, Button} from 'antd';
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
  
  getData = () => {
    this.props.select({
      data: {
        page: 0,
        pagesize: 25,
        coding: "P0005"
      }            
  })
  }

    componentDidMount(){
      this.getData()
    }


    handleClick = (data) => {
      this.props[data.dispatch](data)
    }     
    
    render(){
      const {list, total, pages} = this.props.module
      
        return (
            <div>
                <ModalGroup {...this.props} article={Article} coding="P0005" />
            
                <Card
                  title="合作伙伴"
                  extra={
                    <R_drawer.drawerForm title="新增合作伙伴" name="新增合作伙伴" coding="P0003" renderList={this.getData} {...this.props} >
                      <Article />
                    </R_drawer.drawerForm>
                  }
                >
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
                      <R_drawer.drawerForm title="编辑合作伙伴" name="编辑" id={item.id} coding="P0005" renderList={this.getData} {...this.props} >
                        <Article />
                      </R_drawer.drawerForm>
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
