import React from 'react'
import { Checkbox } from 'antd'

export default (props) => {

    function onChange(e) {
        debugger
        props.onChange({
            checked: e.target.checked,
            type: "single",
            value: {
                id: props.data
            }
            
        })
        console.log(`checked = ${e.target.checked}`);
      }

      const ches = () => (
        props.list.some((item, index) => {
            return item.id === props.data
        })
      )

    return (
        <div>
                <Checkbox checked={ches()} onChange={onChange}></Checkbox>{console.log(props.list)}
        </div>
    
    )
}