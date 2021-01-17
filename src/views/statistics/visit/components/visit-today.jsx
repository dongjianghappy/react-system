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
      <table width="100%" class="table-striped table-hover col-left-2">
        <tr class="th">
          <td class="col-md-1">序号</td>
          <td class="col-md-9">受访页面URL</td>
          <td class="col-md-1">浏览次数</td>
          <td class="col-md-1">占比</td>
        </tr>
        {props.dataSource &&
          props.dataSource.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.url}</td>
              <td>{item.nums}</td>
              <td></td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default List;
