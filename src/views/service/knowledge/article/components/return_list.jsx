import React from "react";
import { Space, Button, Popover } from "antd";
import { Link, checkButtonAuth, authorized, codings } from "@/utils";
import {
  Confirm,
  WeCheckbox,
  Sorter,
  Status,
  WeModal,
  ContentTag,
} from "@/components";
import Detail from "./return_detail";

const mod = window.location.pathname.split("/")[2] || "";

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
        className="table-striped table-hover artlist col-left-35"
      >
        <tr className="th">
          <td className="col-md-1">选择</td>
          <td className="col-md-1 sorter">
            <Sorter title="ID" renderList={props.getData} field="id" />
          </td>
          <td className="col-md-5">名称</td>
          <td className="col-md-1"> 退回类型</td>
          <td className="col-md-3"> 退回原因</td>
          <td className="col-md-1">发布时间</td>
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
              <td>{item.reason_type}</td>
              <td>{item.return_reason}</td>
              <td>{item.datetime}</td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default List;
