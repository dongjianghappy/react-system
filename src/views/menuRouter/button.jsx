import React from 'react'
import { Card, Form, Input, InputNumber, Button, Radio, Select, DatePicker, Row, Col } from 'antd';
import { SelectBox, R_button, Quick } from '../../components'
import Article from './addButton'


const { Option } = Select
export default class Forms extends React.Component{

    state={
        data: []
    }

    async componentDidMount(){
        const data = await this.props.fetch({
            api: "routerSelect",
            data: {
              page: 0,
              pagesize: 10,
              type: "1",
              fid: this.props.global.data.id,
              coding: "P0015"
            }            
        })
        debugger
        if(data.result.list !== null){
            this.setState({
                data: data.result.list
            })
        }
        debugger
    }    

    render(){
        debugger

        return (
            <>
                
                <Row className="mb10">
                    <Col span={6}>按钮名称</Col>
                    <Col span={2}>顺序</Col>
                    <Col span={14}>权限标记</Col>
                    <Col span={2}>操作</Col>
                </Row>
                {
                    this.state.data.map((item) => (
                        <Row>
                            <Col span={6}><Quick id={item.id} title={item.name} field="name" coding="P0015" changeData={this.props.changeData}/></Col>
                            <Col span={2}><Quick id={item.id} title={item.sort} field="sort" coding="P0015" changeData={this.props.changeData}/></Col>
                            <Col span={14}><Quick id={item.id} title={item.authority} field="authority" coding="P0015" changeData={this.props.changeData}/></Col>
                            <Col span={2}>删除</Col>
                        </Row>
                    ))
                }

                <Article {...this.props} />

            </>
        )
    }
}
