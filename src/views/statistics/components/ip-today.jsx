import React from 'react';

const List = (props) =>{

    return(
        <>
            <table width="100%" class="table-striped table-hover col-left-2">
                <tr class="th">
                    <td class="col-md-1">序号</td>
                    <td class="col-md-6">IP</td>
                    <td class="col-md-2">浏览次数</td>
                    <td class="col-md-2">占比</td>
                </tr>
                {
                    props.data && props.data.map((item, index) => (
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.ip}</td>
                        <td>{item.nums}</td>
                        <td>{item.nums}</td>
                    </tr>
                    ))
                }
                </table>
        </>
        
    )

}

export default List
