import React, { useState, useRef } from 'react'
import { Button, message } from 'antd'

const Quick = (props) => {

    const {dispatch, data} = props
    const [value, setValue] = useState("")
    const Ref = useRef()

    const  getFocus= (e) => {

        if(props.disabled || !props.authorized){
            return true
        }

        Ref.current.classList.add("inputline")
        Ref.current.setAttribute("contenteditable", true)
        Ref.current.focus()
        setValue(Ref.current.innerHTML)
        console.log(value);
      }

    const  getBuler= (e) => {
      Ref.current.classList.remove("inputline")
      Ref.current.removeAttribute("contenteditable")
      if(value !== Ref.current.innerHTML){
          dispatch.update({
              api: "changeData",
              data: {
                coding: data.coding,
                id: data.id,
                field: data.field,
                value: Ref.current.innerHTML
              }
          }).then((res) => {
            message.info("编辑成功")
          })
      }
    }

    return (
        <span onClick={getFocus} className="quick-edit" onBlur={getBuler} ref={Ref} style={{width: (props.width ? props.width : '100%')}} >{props.title}</span>
    )
}

export default Quick

