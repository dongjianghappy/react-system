import React from "react";
import { Space, Button, Popover } from "antd";
import {
  Link,
  checkButtonAuth,
  authorized,
  codings,
  datetime,
  channel,
} from "@/utils";
import {
  Confirm,
  WeCheckbox,
  Sorter,
  Status,
  WeModal,
  ContentTag,
} from "@/components";
import Detail from "./return_detail";

const mod = channel().module || "";
const { del, edit } = (authorized.channel[mod] &&
  authorized.channel[mod].art) || {
  del: "",
  edit: "",
};

const { art: coding, cate: catcoing } = codings[mod];
debugger;
const List = (props) => {
  return (
    <>
      <table
        width="100%"
        className="table-striped table-hover artlist col-left-3"
      >
        <tr className="th">
          <td className="col-md-1">选择</td>
          <td className="col-md-1 sorter">
            <Sorter title="ID" renderList={props.getData} field="id" />
          </td>
          <td className="col-md-5">名称</td>
          <td className="col-md-1">分类</td>
          <td className="col-md-2">发布时间</td>
          <td className="col-md-2">操作</td>
        </tr>
        {props.data &&
          props.data.map((item, index) => (
            <tr class="tr-list">
              <td>
                <WeCheckbox data={{ id: item.id }} {...props}></WeCheckbox>
              </td>
              <td>{item.id}</td>
              <td>
                {item.title}
                <ContentTag item={item} />
              </td>
              <td>{item.parent ? item.parent : "未分类"}</td>
              <td>{datetime(item.datetime)}</td>
              <td>
                <Space size="middle">
                  <Confirm
                    {...props}
                    name="审核"
                    config={{
                      operating: "check",
                      message: React.$modalEnum,
                    }}
                    data={{ coding, id: item.id, management_checked: 1 }}
                    api="checkContent"
                    renderList={props.getData}
                    authorized={checkButtonAuth("delete")}
                  />
                  <WeModal.modalForm
                    {...props}
                    name="退回"
                    action="edits"
                    data={{ id: item.id, coding }}
                    api="managementReturn"
                    authorized={checkButtonAuth("")}
                  >
                    <Detail />
                  </WeModal.modalForm>
                </Space>
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default List;
