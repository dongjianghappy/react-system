import React from 'react'
import { Space, Button, message } from 'antd'
import R_button from '../components/button'
import { Confirm } from '@/components'

const ButtonGroup = (props) => {

    const { add, del, edit} = props.authorized;

    debugger

    const { dispatch, module } = props
    const render = (data) => {
        if(module.checkedList.length === 0){
            message.info("请选择数据")
            return true
        }
    }     
      
    const checkedAll = () =>{
        const data = []
        module[module.node].forEach( Item=>{
            data.push({
                id: Item.id
            })
        })
  
        dispatch.checkBox({
            node: module.node,
            type: "all",
            value: data            
        })
    }

    const submit = () => {
   
    }
    return (
        
        <Space style={{marginTop: 25}}>
            {
                props.button && props.button.map((item, index) => {
                    if(item === 'all'){
                         return <R_button.button click={checkedAll} name="全选" title="全选" size="default" />
                    }else if(item === 'delete'){

                        return <Confirm 
                          name="删除" 
                          isText={false}
                          config={{operating: "alldelete", message: React.$modalEnum}} 
                          api="delete"
                          render={render}
                          {...props} // props 提升主要防止authorized 覆盖
                          authorized={props.checkButtonAuth('del')}
                        />
                    }else if(item === 'open'){

                        return <Confirm 
                          name="开启" 
                          isText={false}
                          config={{operating: "allopen", message: React.$modalEnum}} 
                          api="openAndClose"
                          params={{operating: "open"}}
                          render={render}
                          {...props}
                          authorized={props.checkButtonAuth('edit')}
                        />
                    }else if(item === 'close'){

                        return <Confirm 
                          name="关闭" 
                          isText={false}
                          config={{operating: "allclose", message: React.$modalEnum}} 
                          api="openAndClose"
                          params={{operating: "close"}}
                          render={render}
                          {...props}
                          authorized={props.checkButtonAuth('edit')}
                        />
                    }
                        // return <R_button.button click={handleClick} name="新增友链" title="删除" size="default" api="delete" />
                    // }else if(item === 'open'){
                    //     return <R_button.button click={handleClick} name="开启" title="开启" size="default" operating="open" dispatch="popup" node="dialog" fn="openAndClose"  />
                    // }else if(item === 'close'){
                    //     return <R_button.button click={handleClick} name="关闭" title="关闭" size="default" operating="close" dispatch="popup" node="dialog" fn="openAndClose"  />
                    // }else if(item === 'update'){
                    //     return <Button onClick={submit}>更新</Button>
                    // }else if(item === 'move'){
                    //     return <R_button.button click={handleClick} name="移动" title="移动" size="default" dispatch="popup" node="dialog" fn="getDelete" />
                    // }else if(item === 'flag'){
                    //     return <R_button.button click={handleClick} name="属性设置" title="属性设置" content={props.flags} size="default" dispatch="popup" node="dialog" fn="getDelete" />
                    // }
                })
            }
            
            
            
            
            
            
            
        </Space>
    )
}

export default ButtonGroup
