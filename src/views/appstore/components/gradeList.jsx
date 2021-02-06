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
          <td class="col-md-2">应用名称</td>
          <td class="col-md-3">描述</td>
          <td class="col-md-1">访客</td>
          <td class="col-md-1">普通用户</td>
          <td class="col-md-1">高级用户</td>
          <td class="col-md-1">VIP</td>
          <td class="col-md-1">超级VIP</td>
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
            </tr>
          ))}
      </table>
    </>
  );
};
