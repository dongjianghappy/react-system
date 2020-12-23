import React from "react";

import { WeCheckbox } from "@/components";
import { Avatar } from "antd";

const List = (props) => {
  return (
    <>
      <table width="100%" className="table-striped table-hover col-left-4">
        <tr class="th">
          <td class="col-md-1">选择</td>
          <td class="col-md-1">头像</td>
          <td class="col-md-2">会员账号</td>
          <td class="col-md-2">用户名</td>
          <td class="col-md-2">电子邮箱</td>
          <td class="col-md-2">注册原因</td>
          <td class="col-md-2">注册时间</td>
        </tr>
        {props.data &&
          props.data.map((item, index) => (
            <tr>
              <td>
                <WeCheckbox data={{ id: item.id }} {...props}></WeCheckbox>
              </td>
              <td>
                <Avatar src={item.photos} />
              </td>
              <td>{item.account}</td>
              <td>{item.nickname}</td>
              <td>{item.email}</td>
              <td></td>
              <td>{item.last_login_time}</td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default List;
