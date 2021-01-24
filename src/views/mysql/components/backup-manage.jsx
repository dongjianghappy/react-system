import React from "react";
import { Card, Space, Button, Popover } from "antd";
import { checkButtonAuth, authorized, codings } from "@/utils";
import { Confirm, WeCheckbox } from "@/components";
const { mysql: coding } = codings;

const BackupManage = (props) => {
  const { dataSource } = props;

  return (
    <>
      <table width="100%" class="table-striped table-hover artlist col-left-2">
        <tr class="th">
          <td class="col-md-1 align-center">选择</td>
          <td class="col-md-6">数据库表</td>
          <td class="col-md-1">大小</td>
          <td class="col-md-2">备份时间</td>
          <td class="col-md-2">操作</td>
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
              <td>{item.dbsize}</td>
              <td>{item.dbtime}</td>
              <td>
                <Confirm
                  name="还原"
                  config={{
                    operating: "remove",
                    message: React.$modalEnum,
                  }}
                  data={{ coding, id: item.id }}
                  api="removeAndRestore"
                  renderList={props.getData}
                  authorized={checkButtonAuth("del")}
                  {...props}
                />
                <span className="line">|</span>
                <Confirm
                  name="删除"
                  config={{
                    operating: "remove",
                    message: React.$modalEnum,
                  }}
                  data={{ coding, id: item.id }}
                  api="removeAndRestore"
                  renderList={props.getData}
                  authorized={checkButtonAuth("del")}
                  {...props}
                />
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default BackupManage;
