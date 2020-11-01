import React from 'react'
import { Pagination } from 'antd';

const R_pagination = (props) => {
    
    const onChange = (pageNumber, page) => {
        props.select({
            api: props.api,
            data: {
              page: pageNumber,
              pagesize: page,
              coding: props.coding,
              ...props.search
            }            
        })
        console.log('Page: ', pageNumber);
    }

    return (
        <Pagination 
            showQuickJumper
            pagesize={15}
            total={props.data.total}
            onChange={onChange}
            locale={{jump_to:"跳至"}}
            style={{marginTop: 25}}
         />
    )
}

export default R_pagination
