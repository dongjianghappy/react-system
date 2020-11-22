import React from 'react'
import { Pagination } from 'antd';

const R_pagination = (props) => {

    const { module, dispatch } = props

    const onChange = (pageNumber, page) => {
        dispatch.select({
            api: props.api,
            data: {
              page: pageNumber,
              pagesize: page,
              ...props.data

            }            
        })
    }

    return (
        <Pagination 
            showQuickJumper
            pagesize={15}
            total={module.total}
            onChange={onChange}
            locale={{jump_to:"跳至"}}
            style={{marginTop: 25}}
         />
    )
}

export default R_pagination
