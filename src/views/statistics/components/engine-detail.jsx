import React, { useState, useEffect } from "react";
import {
  Space,
  Card,
  Table,
  Checkbox,
  Button,
  Input,
  Form,
  Radio,
  Select,
} from "antd";
import {
  Status,
  R_button,
  WeDrawer,
  WeCheckbox,
  Dialog,
  R_form,
  Quick,
  WeModal,
} from "@/components/index.js";

import { ButtonGroup, Keyword, CheckboxGroup } from "@/common";

const { Option } = Select;

const List = (props) => {
  return (
    <>
      <table width="100%" class="table-striped table-hover col-left-34">
        <tr class="th">
          <td class="col-md-1">id</td>
          <td class="col-md-1">搜索引擎</td>
          <td class="col-md-3">页面来源</td>
          <td class="col-md-3">受访页面</td>
          <td class="col-md-1">系统</td>
          <td class="col-md-1">ip</td>
          <td class="col-md-2">访问时间</td>
        </tr>
        {props.data &&
          props.data.map((item, index) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.source}</td>
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