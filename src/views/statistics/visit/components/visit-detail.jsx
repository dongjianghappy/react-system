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
      <table width="100%" class="table-striped table-hover col-left-23">
        <tr class="th">
          <td class="col-md-2">浏览时间</td>
          <td class="col-md-4">页面来源</td>
          <td class="col-md-4">受访页面</td>
          <td class="col-md-1">ip</td>
          <td class="col-md-1">区域</td>
        </tr>
        {props.dataSource &&
          props.dataSource.map((item, index) => (
            <tr>
              <td>{item.datetime}</td>
              <td>{item.source_url}</td>
              <td>{item.url}</td>
              <td>{item.ip}</td>
              <td>{item.area}</td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default List;
