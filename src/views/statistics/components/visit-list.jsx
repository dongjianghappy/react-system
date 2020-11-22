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
  const visit = [
    {
      value: "today",
      name: "今日",
    },
    {
      value: "yesterday",
      name: "昨日",
    },
    {
      value: "week",
      name: "本周",
    },
    {
      value: "month",
      name: "本月",
    },
    {
      value: "max",
      name: "历史最高",
    },
    {
      value: "all",
      name: "历史累计",
    },
  ];

  return (
    <>
      <table width="100%" class="table-striped table-hover col-left-1">
        <tr class="th">
          <td class="col-md-3">日期</td>
          <td class="col-md-3">IP(个)</td>
          <td class="col-md-3">新独立IP(个)</td>
          <td class="col-md-3">浏览次数(PV)</td>
        </tr>
        {visit &&
          visit.map((item, index) => (
            <tr>
              <td>{item.name}</td>
              <td>{props.data[item.value] && props.data[item.value].ip}</td>
              <td>{props.data[item.value] && props.data[item.value].nip}</td>
              <td>{props.data[item.value] && props.data[item.value].pv}</td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default List;
