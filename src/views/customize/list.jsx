import React from 'react'
import { Card, Table, Space, Popconfirm, Button, Checkbox, Switch, Pagination, Row, Col} from 'antd';
import { connect } from 'react-redux'
import { R_drawer, Dialog, ButtonGroup, OperatingGroup, Operatinavbar, Condition } from '../../components/index.js'
import Detail from './detail'
import dispatchToProps from '../../store/dispatch'
import api from '../../api';

class CustomizeList extends React.Component{
    
    getData = () => {
      this.props.select({
        api: 'anpassen_field',
        data: {
          id: this.props.location.state.id
        },
        node: "fieldList"            
      })
    }

    componentDidMount(){
      this.getData()
    }

    render(){

      const { fieldList } = this.props.module
        return (
            <div>
                <Card
                title="字段管理"
                extra={
                  <Space>
                      <R_drawer.drawerForm title="新增字段" name="新增字段" api="add_anpassen" data={{channel_id: this.props.location.state.id}} renderList={this.getData} {...this.props} >
                        <Detail />
                      </R_drawer.drawerForm>
                  </Space>
                }
                >
                <table width="100%" class="table-striped artlist col-left-1">
                <tr class="th">
                  <td class="col-md-3">注释</td>
                  <td class="col-md-1">字段名</td>
                  <td class="col-md-1">数据类型</td>
                  <td class="col-md-2">长度</td>
                  <td class="col-md-1">显示类型</td>
                  <td class="col-md-2">模型</td>
                  <td class="col-md-2">操作</td>
                </tr>
                {
                      fieldList && fieldList.map((item, index) => (
                        <tr>
                          <td>{item.remark}</td>
                          <td>{item.field}</td>
                          <td>{item.dtype}</td>
                          <td>{item.length}</td>
                          <td>{item.text_type}</td>
                          {/* React.$enums.formType[item.text_type].name} */}
                          <td>{item.text_type}</td>
                          <td>
                            <R_drawer.drawerForm title="编辑友链" name="编辑" api="update_anpassen" data={{channel_id: item.channel_id}} id={item.id} coding="P0011" renderList={this.getData} {...this.props} >
                              <Detail />
                            </R_drawer.drawerForm>
                            删除
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
    module: state.customize
  }
}

export default connect(stateToProops, dispatchToProps)(CustomizeList)
