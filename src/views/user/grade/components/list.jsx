import React from "react";
import { Space, Button } from "antd";
import { checkButtonAuth, authorized, codings } from "@/utils";
import { Confirm, Status, WeModal } from "@/components";

import Detail from "./detail";

const { edit } = authorized.user.grade;
const { grade: coding } = codings.user;

export default (props) => {
  return (
    <>
      <table width="100%" class="table-striped table-hover col-left-12">
        <tr class="th">
          <td class="col-md-2">
            {" "}
            {props.type === "2" ? "应用名称" : "功能名称"}{" "}
          </td>
          <td class="col-md-3">描述</td>
          <td class="col-md-1">普通访客</td>
          <td class="col-md-1">普通会员</td>
          <td class="col-md-1">高级会员</td>
          <td class="col-md-1">VIP会员</td>
          <td class="col-md-1">超级VIP会员</td>
          <td class="col-md-2">操作</td>
        </tr>
        {props.data &&
          props.data.map((item, index) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <Status
                  {...props}
                  data={{ item, field: "visitors", coding }}
                  authorized={checkButtonAuth("edit")}
                />
              </td>
              <td>
                <Status
                  {...props}
                  data={{ item, field: "ordinary_member", coding }}
                  authorized={checkButtonAuth("edit")}
                />
              </td>
              <td>
                <Status
                  {...props}
                  data={{ item, field: "senior_member", coding }}
                  authorized={checkButtonAuth("edit")}
                />
              </td>
              <td>
                <Status
                  {...props}
                  data={{ item, field: "vip_member", coding }}
                  authorized={checkButtonAuth("edit")}
                />
              </td>
              <td>
                <Status
                  {...props}
                  data={{ item, field: "super_vip_member", coding }}
                  authorized={checkButtonAuth("edit")}
                />
              </td>
              <td>
                <Space size="middle">
                  <WeModal.modalForm
                    {...props}
                    name="编辑权限"
                    action="edit"
                    data={{ id: item.id, coding }}
                    renderList={props.getData}
                    authorized={checkButtonAuth(edit)}
                  >
                    <Detail />
                  </WeModal.modalForm>
                  <Confirm
                    {...props}
                    name="删除"
                    config={{
                      operating: "deleteGrade",
                      message: React.$modalEnum.user,
                    }}
                    data={{ coding, id: item.id }}
                    api="delete"
                    authorized={checkButtonAuth("delete")}
                  />
                </Space>
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};
