import React, { useState, useEffect } from 'react';
import {Space, Card, Table, Checkbox, Button, Input, Form, Radio, Select } from 'antd'
import { Status, R_button, R_drawer, R_checkbox, Dialog, R_form, Quick, R_modal} from '@/components/index.js'


  const { Option } = Select


const List = (props) =>{

    return(
        <>
          <table width="100%" className="table-striped table-hover col-left-4">
            <tr class="th">
              <td class="col-md-1">选择</td>
              <td class="col-md-1">头像</td>
              <td class="col-md-2">会员账号</td>
              <td class="col-md-2">用户名</td>
              <td class="col-md-2">电子邮箱</td>
              <td class="col-md-2">注册原因</td>
              <td class="col-md-2">注册时间</td>
            </tr>
              {
              props.data && props.data.map((item, index) => (
                <tr>
                  <td><R_checkbox onChange={props.checkBox} list={props.module.checkedList} data={item.id}></R_checkbox></td>
                  <td><img src={item.photos} style={{borderRadius: '50%', width: '30px', height: '30px'}} /></td>
                  <td>{item.account}</td>
                  <td>{item.nickname}</td>
                  <td>{item.email}</td>
                  <td></td>
                  <td>{item.last_login_time}</td>
                </tr>
                ))
              }
          </table>
        </>
        
    )

}

export default List
