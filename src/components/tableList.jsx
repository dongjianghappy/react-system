import React, { useState, useEffect } from 'react'

const TableList = (props) => {

    // const [data, setData] = useState({})

    useEffect(() => {
        props.request()
    },[])

    return (
        <>
           {props.children}
        </>
    )
}

export default TableList