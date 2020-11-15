import React from 'react';

const List = (props) =>{

    return(
        <>
            <table width="100%" class="table-striped table-hover col-left-2">
                <tr class="th">
                    <td class="col-md-1">ID</td>
                    <td class="col-md-9">IP</td>
                    <td class="col-md-2">访问时间</td>
                </tr>
                {
                    props.data && props.data.map((item, index) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.ip}</td>
                        <td>{item.datetime}</td>
                    </tr>
                    ))
                }
                </table>
        </>
        
    )

}

export default List
