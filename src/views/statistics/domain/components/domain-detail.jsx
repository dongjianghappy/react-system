import React from "react";

const List = (props) => {
  const { dataSource } = props;
  return (
    <>
      <table width="100%" class="table-striped table-hover col-left-234">
        <tr class="th">
          <td class="col-md-1">id</td>
          <td class="col-md-2">来路域名</td>
          <td class="col-md-3">来源地址</td>
          <td class="col-md-3">受访页面</td>
          <td class="col-md-1">系统</td>
          <td class="col-md-1">ip</td>
          <td class="col-md-1">访问时间</td>
        </tr>
        {dataSource &&
          dataSource.map((item, index) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.domain}</td>
              <td>{item.source_url}</td>
              <td>{item.url}</td>
              <td>{item.system}</td>
              <td>{item.ip}</td>
              <td>{item.datetime}</td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default List;
