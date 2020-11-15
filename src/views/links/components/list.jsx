import React, { useState, useEffect } from 'react';
import {Space, Card, Table, Checkbox, Button, Input, Form, Radio, Select } from 'antd'
import { Status, Confirm, R_drawer, R_checkbox, Dialog, R_form, Quick, R_modal} from '@/components/index.js'
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
            <tr className="th">
              <td className="col-md-1">选择</td>
              <td className="col-md-2">网站名称</td>
              <td className="col-md-6">链接地址</td>
              <td className="col-md-1">状态</td>
              <td className="col-md-2">操作</td>
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
                  <td><Status type="switch" coding="P0003" field="status" {...item} updateStatus={props.updateStatus} /></td>
                  <td>
                    <Space>
                      <R_drawer.drawerForm isText={true} title="编辑友链" name="编辑" id={item.id} coding="P0003" renderList={props.getData} {...props} >
                        <Article />
                      </R_drawer.drawerForm>
                      <Confirm 
                        name="删除" 
                        type="text" 
                        config={React.$modalEnum.delete} 
                        coding="P0003" 
                        data={{id: item.id}} 
                        fetch={props.fetch} 
                        api="delete" 
                        renderList={props.getData}
                      />
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
