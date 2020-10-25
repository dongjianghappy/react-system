import React, { useState, useRef } from 'react'
import { Button, message } from 'antd'

const Quick = (props) => {
    const [value, setValue] = useState("")
    const Ref = useRef()

    const  getFocus= (e) => {

        if(props.disabled){
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
          props.changeData({
              coding: props.coding,
              id: props.id,
              field: props.field,
              value: Ref.current.innerHTML,
          })
      }
    }

    return (
        <span onClick={getFocus} className="quick-edit" onBlur={getBuler} ref={Ref} style={{width: (props.width ? props.width : '100%')}} >{props.title}</span>
    )
}

export default Quick

