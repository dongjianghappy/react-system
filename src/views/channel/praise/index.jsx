import React from 'react';
import { Card, Row, Col, Space, Button } from 'antd'
import { connect } from 'react-redux'
import dispatchToProps from '@/store/dispatch'

import {
  R_checkbox,
  R_pagination
} from '@/components/index.js'


class Praise extends React.Component{

    componentDidMount(){
      this.props.select({
        api: "praise",
        data: {
          page: 0,
          pagesize: 25,
          coding: "A0000"
        },
        node: "praise"            
      })
    }

    render(){
        
        const { praise } = this.props.module

        return(
           <>
                <Card title="点赞文档">
                <table width="100%" class="table-striped table-hover artlist col-left-23">
                  <tr class="th">
                    <td class="col-md-1">选择</td>
                    <td class="col-md-4">点赞</td>
                    <td class="col-md-4">内容</td>
                    <td class="col-md-1">点赞时间</td>
                    <td class="col-md-1">操作</td>
                  </tr>
                      {
                          praise && praise.map((item, index) => (
                              <tr className="tr-list">
                                  <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                                  <td>{item.title}</td>
                                  <td>{item.content}</td>
                                  <td>{item.times}</td>
                                  <td>{item.date_time}</td>
                              </tr>
                          ))
                      }
                  </table>

                  <Row>
                    <Col span={24} style={{textAlign: "right"}}>
                      <R_pagination data={this.props.module} select={this.props.select} api="comment" coding="A0000" />
                    </Col>
                  </Row>
                </Card>
           </>
        )
    }
}

const stateToProops = (state) => {
  return {
    module: state.channel
  }
}

export default connect(stateToProops, dispatchToProps)(Praise)