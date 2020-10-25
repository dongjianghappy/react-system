import React, { useEffect } from 'react'

const Node = (props) => {


    useEffect(() => {
       props.fn({
           node: props.node
       })
        
    }, [])

    return (
        <></>
    )
}

export default Node
