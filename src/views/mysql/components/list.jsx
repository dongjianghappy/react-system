import React from "react";
import { Card, Space, Button, Popover } from "antd";
import { checkButtonAuth, authorized, codings } from "@/utils";
import { Confirm, WeCheckbox } from "@/components";
const { mysql: coding } = codings;

const List = (props) => {
  const { dataSource } = props;

  return (
    <>
      <table width="100%" class="table-striped table-hover artlist col-left-2">
        <tr class="th">
          <td class="col-md-1 align-center">选择</td>
          <td class="col-md-2">数据库表</td>
          <td class="col-md-1">类型</td>
          <td class="col-md-1">记录</td>
          <td class="col-md-1">整理</td>
          <td class="col-md-1">大小</td>
          <td class="col-md-1">多余</td>
          <td class="col-md-2">创建时间</td>
          <td class="col-md-1 align-center">操作</td>
        </tr>
        {dataSource &&
          dataSource.map((item, index) => (
            <tr>
              <td>
                <WeCheckbox data={{ id: item.id }} {...props}></WeCheckbox>
              </td>
              <td>
                {item.dbname} {item.remark}
              </td>
              <td>{item.dbtype}</td>
              <td>{item.dbrow}</td>
              <td>{item.dbcharset}</td>
              <td>{item.dbsize}</td>
              <td> - </td>
              <td>{item.dbtime}</td>
              <td>
                <Confirm
                  {...props}
                  name="备份"
                  config={{
                    operating: "remove",
                    message: React.$modalEnum,
                  }}
                  data={{ coding, id: item.id }}
                  api="removeAndRestore"
                  renderList={props.getData}
                  authorized={checkButtonAuth("del")}
                />
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default List;
