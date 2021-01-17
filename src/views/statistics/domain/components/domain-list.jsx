import React from "react";

const List = (props) => {
  const { dataSource } = props;
  return (
    <>
      <table width="100%" class="table-striped table-hover col-left-2">
        <tr class="th">
          <td class="col-md-1">序号</td>
          <td class="col-md-9">来路域名</td>
          <td class="col-md-1">访问次数</td>
          <td class="col-md-1">占比</td>
        </tr>
        {dataSource &&
          dataSource.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.domain}</td>
              <td>{item.nums}</td>
              <td>{item.description}</td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default List;
