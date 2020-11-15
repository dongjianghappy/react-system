import React, { useState, useEffect } from 'react'
import { Card, Form, Input, InputNumber, Button, Radio, Select, DatePicker, Row, Col } from 'antd';
import { SelectBox, R_button, Quick, R_modal } from '../../components'
import Modal from './Detail'


const { Option } = Select
const Detail = (props) => {

    const [response, setResponse] = useState([])

    useEffect(() => {
        debugger
        
        setResponse(props.response && props.response.list)
    }, [props.response && props.response.list])

    // state={
    //     data: []
    // }

    // async componentDidMount(){
    //     const data = await this.props.fetch({
    //         api: "routerSelect",
    //         data: {
    //           page: 0,
    //           pagesize: 10,
    //           type: "1",
    //           fid: this.props.global.data.id,
    //           coding: "P0015"
    //         }            
    //     })
    //     debugger
    //     if(data.result.list !== null){
    //         this.setState({
    //             data: data.result.list
    //         })
    //     }
    //     debugger
    // }    

    return (
        <>
            <table width="100%" className="table-striped col-left-13">
                <tr>
                    <td className="col-md-2" >按钮名称</td>
                    <td className="col-md-1" >顺序</td>
                    <td className="col-md-7" >权限标记</td>
                    <td className="col-md-2" >操作</td>
                </tr>

            {
                response && response.map((item) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.sort}</td>
                        <td>{item.authority}</td>
                        <td>删除</td>
                    </tr>
                ))
            }

            </table>
            <R_modal.modalForm title="新增按钮权限" name="新增按钮权限" data={{fid: props.data.fid}} action="add" insert={props.insert} coding="P0015"  >
                <Modal />
            </R_modal.modalForm>
            {/* <Article {...this.props} /> */}

        </>
    )
}

export default Detail
