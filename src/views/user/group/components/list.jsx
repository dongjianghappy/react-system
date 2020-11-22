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
import Detail from "./detail";
const { Option } = Select;

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
                    title="编辑应用"
                    name="编辑"
                    id={item.id}
                    coding="U0011"
                    renderList={props.getData}
                    {...props}
                  >
                    <Detail />
                  </WeModal.modalForm>
                  <Button type="primary" size="small">
                    删除
                  </Button>
                </Space>
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default List;
