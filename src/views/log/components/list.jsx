import React from "react";

const List = (props) => {
  const { dataSource } = props;
  return (
    <>
      <table width="100%" className="table-striped table-hover col-left-23">
        <tr class="th">
          <td class="col-md-1">管理员名称</td>
          <td class="col-md-1">身份</td>
          <td class="col-md-1">浏览器类型</td>
          <td class="col-md-1">语言</td>
          <td class="col-md-1">操作系统</td>
          <td class="col-md-1">IP</td>
          <td class="col-md-1">地区</td>
          <td class="col-md-2">登录时间</td>
        </tr>
        {dataSource.list &&
          dataSource.list.map((item, index) => (
            <tr>
              <td>{item.username}</td>
              <td>{item.grade}</td>
              <td>{item.browser}</td>
              <td>{item.lang}</td>
              <td>{item.device}</td>
              <td>{item.ip}</td>
              <td>{item.area}</td>
              <td>{item.login_time}</td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default List;
