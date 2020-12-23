import React from "react";
import {
  Card,
  Table,
  Space,
  Popconfirm,
  Button,
  Checkbox,
  Input,
  DatePicker,
} from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Status,
  Dialog,
  Operatinavbar,
  Condition,
} from "../../components/index.js";
import dispatchToProps from "../../store/dispatch";
import { R_button } from "../../components/index.js";
import { Option } from "../../common";
const { Search } = Input;
const { RangePicker } = DatePicker;

class Tag extends React.Component {
  componentDidMount() {
    this.props.select({
      data: {
        page: 0,
        pagesize: 100,
        coding: "P0007",
      },
    });
  }

  render() {
    const { list } = this.props.module;
    return (
      <>
        <Card title="已完成">
          <table width="100%" className="table-striped table-hover col-left-23">
            <tr class="th">
              <td class="col-md-1">选择</td>
              <td class="col-md-2">订单号</td>
              <td class="col-md-4">订单名称</td>
              <td class="col-md-1">类型</td>
              <td class="col-md-2">价格(元/周期)</td>
              <td class="col-md-1">下单日期</td>
              <td class="col-md-1">状态</td>
            </tr>
            {list &&
              list.map((item, index) => (
                <tr>
                  <td>
                    <Checkbox></Checkbox>
                  </td>
                  <td>{item.number}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.cycle}</td>
                  <td>{item.start_time}</td>
                  <td>已完成</td>
                </tr>
              ))}
          </table>
        </Card>
      </>
    );
  }
}

const stateToProops = (state) => {
  return {
    global: state.common.global,
    state,
    module: state.order,
  };
};

export default connect(stateToProops, dispatchToProps)(Tag);
