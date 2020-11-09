import React, { useState, useEffect } from 'react';
import {Space, Card, Table, Checkbox, Button, Input, Form, Radio, Select } from 'antd'
import { Status, R_button, R_drawer, R_checkbox, Dialog, R_form, Quick, R_modal} from '@/components/index.js'
import Article from './article'
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
          <table width="100%" className="table-striped table-hover col-left-23">
            <tr class="th">
                <td class="col-md-1">选择</td>
                <td class="col-md-2">网站名称</td>
                <td class="col-md-2">链接地址</td>
                <td class="col-md-2">站长</td>
                <td class="col-md-2">QQ</td>
                <td class="col-md-2">申请时间</td>
                <td class="col-md-1">操作</td>
            </tr>
            {
            props.data && props.data.map((item, index) => (
                <tr>
                  <td><R_checkbox onChange={props.checkBox} list={props.module.checkedList} data={item.id}></R_checkbox></td>
                  <td>
                  <Quick id={item.id} title={item.name} field="name" coding="P0003" changeData={props.changeData} />
                  </td>
                  <td>
                  <Quick id={item.id} title={item.url} field="url" coding="P0003" changeData={props.changeData} />
                  </td>
                  <td>{item.webmaster}</td>
                  <td>{item.qq}</td>
                  <td>{item.datetime}</td>
                  <td>
                    <Space>
                      审核 | 删除

                    </Space>
                  </td>
                </tr>
            ))
            }
          </table>
                <Operatinavbar 
                  node={ props.node }
                  button={['all', 'delete', 'open', 'close']}
                  data={props.module}
                  coding="P0003"
                  {...props}
                />
        </>
        
    )

}

export default List
