import React from 'react';
import {Space } from 'antd'
import { Status, Confirm, R_drawer, R_checkbox, Quick} from '@/components/index.js'
import Detail from './detail'
  import {
    Operatinavbar
  } from '@/common'

const List = (props) =>{

    const { data } = props
    debugger

    return(
        <>
          <table width="100%" className="table-striped table-hover col-left-2">
                    <tr>
                      <td className="col-md-1">选择</td>
                      <td className="col-md-2">广告名称</td>
                      <td className="col-md-1">尺寸类型</td>
                      <td className="col-md-2">广告位置</td>
                      <td className="col-md-1">每月/元</td>
                      <td className="col-md-2">时间</td>
                      <td className="col-md-1">状态</td>
                      <td className="col-md-2">操作</td>
                    </tr>
                    {
                  props.data && props.data.map((item, index) => (
                    <tr className="tr-list">
                      <td><R_checkbox onChange={props.checkBox} list={props.module.checkedList} data={item.id}></R_checkbox></td>
                      <td><Quick id={item.id} title={item.name} field="name" coding="P0008" changeData={props.changeData}/></td>
                      <td>{item.size_type}</td>
                      <td>{item.size}</td>
                      <td>{item.price}</td>
                      <td>{item.last_time}</td>
                      <td><Status type="switch" coding="P0008" field="status" {...item} updateStatus={props.updateStatus} /></td>
                      <td>
                      <Space>
                      <R_drawer.drawerForm isText={true} title="编辑友链" name="编辑" id={item.id} coding="P0008" renderList={props.getData} {...props} >
                        <Detail />
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
