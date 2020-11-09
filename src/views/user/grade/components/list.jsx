import React, { useState, useEffect } from 'react';
import {Space, Card, Table, Checkbox, Button, Input, Form, Radio, Select } from 'antd'
import { Status, R_button, R_drawer, R_checkbox, Dialog, R_form, Quick, R_modal} from '@/components/index.js'

  import {
    ButtonGroup,
    Keyword,
    CheckboxGroup
  } from '@/common'
  import Detail from './detail'
  const { Option } = Select


const List = (props) =>{

    return(
        <>
            <table width="100%" class="table-striped table-hover col-left-12">
                <tr class="th">
                    <td class="col-md-2"> {props.type === "2" ? "应用名称" : "功能名称"} </td>
                    <td class="col-md-3">描述</td>
                    <td class="col-md-1">普通访客</td>
                    <td class="col-md-1">普通会员</td>
                    <td class="col-md-1">高级会员</td>
                    <td class="col-md-1">VIP会员</td>
                    <td class="col-md-1">超级VIP会员</td>
                    <td class="col-md-2">操作</td>
                </tr>
                {
                    props.data && props.data.map((item, index) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td><Status type="switch" coding="U0003" field="visitors" {...item} updateStatus={props.updateStatus} /></td>
                        <td><Status type="switch" coding="U0003" field="ordinary_member" {...item} updateStatus={props.updateStatus} /></td>
                        <td><Status type="switch" coding="U0003" field="senior_member" {...item} updateStatus={props.updateStatus} /></td>
                        <td><Status type="switch" coding="U0003" field="vip_member" {...item} updateStatus={props.updateStatus} /></td>
                        <td><Status type="switch" coding="U0003" field="super_vip_member" {...item} updateStatus={props.updateStatus} /></td>
                        <td>
                        <Space size="middle">
                            <R_modal.modalForm title="编辑应用" name="编辑" id={item.id} coding="U0003" renderList={props.getData} {...props} >
                                <Detail />
                            </R_modal.modalForm>
                            <Button type="primary" size="small">删除</Button>
                        </Space>
                        </td>
                    </tr>
                    ))
                }
                </table>
        </>
        
    )

}

export default List
