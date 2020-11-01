import React from 'react';
import { Card, Row, Col, Space, Button } from 'antd'
import { connect } from 'react-redux'
import dispatchToProps from '@/store/dispatch'

import {
  R_checkbox
} from '@/components/index.js'


class Basic extends React.Component{

    componentDidMount(){
      this.props.select({
        data: {
          page: 0,
          pagesize: 25,
          coding: "Q0006"
        },
        node: "message"            
      })
    }

    render(){
        
        const { message } = this.props.module

        return(
           <>
                <Card title="系统消息">
                  <table width="100%" className="table-striped col-left-12">
                      {/* <tr className="th">
                      <td>频道</td>
                      <td>频道首页</td>
                      <td>日期</td>
                      </tr> */}
                      {
                          message && message.map((item, index) => (
                              <tr className="tr-list">
                                  <td className="col-md-1"><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                                  <td className="col-md-10">{item.title}</td>
                                  <td className="col-md-1">{item.date_time}</td>
                              </tr>
                          ))
                      }
                  </table>
                  
                  <div className="mt25">
                    <Space>
                      <Button>删除消息</Button>
                      <Button>标记已读</Button>
                    </Space>
                  </div>
                </Card>
           </>
        )
    }
}

const stateToProops = (state) => {
  return {
    module: state.service
  }
}

export default connect(stateToProops, dispatchToProps)(Basic)