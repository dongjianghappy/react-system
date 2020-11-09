import React, { useState, useEffect } from 'react';
import {Space, Card, Table, Checkbox, Button, Input, Form, Radio, Select } from 'antd'
import { Status, R_button, R_drawer, R_checkbox, Dialog, R_form, Quick, R_modal} from '@/components/index.js'

  import {
    ButtonGroup,
    Keyword,
    CheckboxGroup
  } from '@/common'

  const { Option } = Select


const List = (props) =>{

    return(
        <>
            <table width="100%" class="table-striped table-hover col-left-2">
                <tr class="th">
                    <td class="col-md-1">ID</td>
                    <td class="col-md-9">IP</td>
                    <td class="col-md-2">访问时间</td>
                </tr>
                {
                    props.data && props.data.map((item, index) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.cycle}</td>
                        <td>{item.description}</td>
                    </tr>
                    ))
                }
                </table>
        </>
        
    )

}

export default List
