import React from 'react'
import { Checkbox } from 'antd'

export default (props) => {

    function onChange(e) {
        props.onChange({
            checked: e.target.checked,
            value: {
                id: props.data
            }
            
        })
        // if( e.target.checked){
        //     props.list.push({
        //         id: props.data
        //     })
        // }

        console.log(`checked = ${e.target.checked}`);
      }

    return (
    <Checkbox onChange={onChange}></Checkbox>
    )
}