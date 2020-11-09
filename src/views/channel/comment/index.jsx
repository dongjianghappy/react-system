import React from 'react';
import { Card, Row, Col, Space, Button } from 'antd'
import { connect } from 'react-redux'
import dispatchToProps from '@/store/dispatch'

import {
  R_checkbox,
  R_pagination
} from '@/components/index.js'


class Comment extends React.Component{

    componentDidMount(){
      this.props.select({
        api: "comment",
        data: {
          page: 0,
          pagesize: 25,
          coding: "A0000"
        },
        node: "comment"            
      })
    }

    render(){
        
        const { comment } = this.props.module

        return(
           <>
                <Card title="评论文档">
                  <table width="100%" class="table-striped table-hover artlist col-left-23">
                    <tr class="th">
                        <td class="col-md-1">选择</td>
                        <td class="col-md-4">评论资源</td>
                        <td class="col-md-4">内容</td>
                        <td class="col-md-1">时间</td>
                        <td class="col-md-1">操作</td>
                      </tr>
                      {
                          comment && comment.map((item, index) => (
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

export default connect(stateToProops, dispatchToProps)(Comment)