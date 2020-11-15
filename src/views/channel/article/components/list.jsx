import React, { useState, useEffect } from 'react';
import {Space, Card, Table, Checkbox, Button, Input, Form, Radio, Select, Popover } from 'antd'
import { Status, Confirm, R_drawer, R_checkbox, Dialog, R_form, Quick, R_modal, Sorter, ModalCate} from '@/components/index.js'
import { Link } from 'react-router-dom'
import moment from 'moment'
  import {
    ButtonGroup,
    Keyword,
    CheckboxGroup,
    Operatinavbar
  } from '@/common'

  const { Option } = Select


const List = (props) =>{

    return(
        <>
<table width="100%" className="table-striped table-hover artlist col-left-3">
                    <tr className="th">
                      <td className="col-md-1">选择</td>
                      <td className="col-md-1 sorter">
                        <Sorter title="ID" renderList={props.getData} field="id" />
                      </td>
                      <td className="col-md-3">名称</td>
                      <td className="col-md-2">分类</td>
                      <td className="col-md-1">浏览 | 下载</td>
                      <td className="col-md-1">发布时间</td>
                      <td className="col-md-1">状态</td>
                      <td className="col-md-2">操作</td>
                    </tr>
                    {
                      props.data && props.data.map((item, index) => (
                      <tr class="tr-list">
                        <td><R_checkbox onChange={props.checkBox} list={props.module.checkedList} data={item.id}></R_checkbox></td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>
                      <ModalCate {...props} id={item.id} artCoding="A0000" coding="A0001">{item.parent ? item.parent : "未分类"}</ModalCate>
                        </td>
                        <td>{item.visit}|{item.download}</td>
                        <td>{moment(item.datetime).format("YYYYMMDD")}</td>
                        <td><Status type="switch" coding="A0000" field="checked" {...item} updateStatus={props.updateStatus} /></td>
                        <td>
                        <Space size="middle">
                          <Link to={{pathname:'/admin/article/detail', state:{id: item.id, coding: "A0000", channel_id: 3}}}>编辑</Link>
                          <Confirm 
                            name="删除" 
                            type="text" 
                            config={React.$modalEnum.remove.article} 
                            coding="A0000" 
                            data={{id: item.id, operating: "remove"}} 
                            icon="write" 
                            fetch={props.fetch} 
                            api="removeAndRestore" 
                            renderList={props.getData}
                          />
                          <Popover placement="left" content={
                              <div>
                                  <p>编号：{item.id}</p>
                                  <p>标签: {item.label}</p>
                                  <p>作者: {item.id}</p>
                                  <p>来源: {item.source}</p>
                                  <p>更新时间: {item.datetime}</p>
                              </div>
                          }>
                          <Button type="link" size="small">更多</Button>
                          </Popover>
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
