import React from 'react'
import { Card, Row, Col, Skeleton, Switch, Avatar } from 'antd'

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'

const { Meta } = Card;
class Appstore extends React.Component{

    componentDidMount(){
        this.props.select({
            api: 'appstore'           
          })
      }

    render() {
        const {list} = this.props.module
        debugger
        return (
            <>
                <Row>
                    {
                        list && list.map((item, index) => (
                            <Col span="12">
                            <Card 
                                title={item.name} style={{margin: 10}}
                                extra={<a href="#">设置</a>}
                            >
                                <Row>
                                    <Col span="4">
                                        <img src={item.image} style={{width: '90%', height: 60}} />
                                    </Col>
                                    <Col span="20">
                                        <Row style={{paddingBottom: 10}}>
                                            <Col span="2">描述:</Col>
                                            <Col span="22">{item.description}</Col>
                                        </Row>
                                        <Row>
                                            <Col span="2">权限:</Col>
                                            <Col span="22">{item.grade}</Col>
                                        </Row>
                                    </Col>
                                </Row>
                                
                            </Card>
                        </Col>
                        ))
                    }

                </Row>
            </>
        )
    }
}

const stateToProops = (state) => {
    debugger
    return {
      global: state.common.global,
      state,
      module: state.appstore
    }
  }
  
  export default connect(stateToProops, dispatchToProps)(Appstore)