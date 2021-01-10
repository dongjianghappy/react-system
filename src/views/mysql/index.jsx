import React from "react";
import { Card, Space, Button } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { WeCheckbox } from "@/components";

// const { add, del, edit } = authorized.partner;
const { mysql: coding } = codings;

class Mysql extends React.Component {
  componentDidMount() {
    this.props.dispatch.select({
      api: "mysql",
      node: "list",
    });
  }

  render() {
    const { list } = this.props.module;
    return (
      <Card>
        <div style={{ marginBottom: 15 }}>
          <Space>
            <Button type="primary">数据库列表</Button>
            <Button type="primary">备份管理</Button>
          </Space>
        </div>

        <table
          width="100%"
          class="table-striped table-hover artlist col-left-2"
        >
          <tr class="th">
            <td class="col-md-1 align-center">选择</td>
            <td class="col-md-2">数据库表</td>
            <td class="col-md-1">类型</td>
            <td class="col-md-1">记录</td>
            <td class="col-md-1">整理</td>
            <td class="col-md-1">大小</td>
            <td class="col-md-1">多余</td>
            <td class="col-md-2">创建时间</td>
            <td class="col-md-1 align-center">操作</td>
          </tr>
          {list &&
            list.map((item, index) => (
              <tr>
                <td>
                  <WeCheckbox
                    data={{ id: item.id }}
                    {...this.props}
                  ></WeCheckbox>
                </td>
                <td>
                  {item.dbname} {item.remark}
                </td>
                <td>{item.dbtype}</td>
                <td>{item.dbrow}</td>
                <td>{item.dbcharset}</td>
                <td>{item.dbsize}</td>
                <td> - </td>
                <td>{item.dbtime}</td>
                <td>备份 | 还原</td>
              </tr>
            ))}
        </table>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.mysql,
  }),
  dispatchToProps
)(Mysql);
