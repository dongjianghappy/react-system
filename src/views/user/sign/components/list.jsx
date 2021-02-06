import React from "react";
import { Space } from "antd";
import { checkButtonAuth, authorized, codings } from "@/utils";
import { Confirm, WeModal } from "@/components";

import Detail from "./detail";

const { del, edit } = authorized.user.sign;
const { sign: coding } = codings.user;

const List = (props) => {
  return (
    <>
      <table width="100%" class="table-striped table-hover col-left-4">
        <tr class="th">
          <td class="col-md-2">策略名称</td>
          <td class="col-md-1">周期</td>
          <td class="col-md-1">积分</td>
          <td class="col-md-6">描述</td>
          <td class="col-md-2">操作</td>
        </tr>
        {props.data &&
          props.data.map((item, index) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.cycle}</td>
              <td>{item.integration}</td>
              <td>{item.description}</td>
              <td>
                <Space size="middle">
                  <WeModal.modalForm
                    {...props}
                    name="编辑"
                    isText={true}
                    action="edit"
                    data={{ id: item.id, coding }}
                    authorized={checkButtonAuth(edit)}
                  >
                    <Detail />
                  </WeModal.modalForm>
                  <Confirm
                    {...props}
                    name="删除"
                    config={{
                      operating: "delete",
                      message: React.$modalEnum.user.sign,
                    }}
                    data={{ coding, id: item.id }}
                    api="delete"
                    authorized={checkButtonAuth(del)}
                  />
                </Space>
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default List;
