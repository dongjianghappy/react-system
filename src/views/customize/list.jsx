import React from "react";
import { Card, Space } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { Confirm, WeDrawer } from "@/components";
import Detail from "./components/detail";

const { add, del, edit } = authorized.customize;
const { customize: coding } = codings;
debugger;
class CustomizeList extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.select({
      api: "anpassen_field",
      data: {
        id: this.props.location.state.id,
      },
      node: "fieldList",
    });
  };

  render() {
    const { fieldList } = this.props.module;
    return (
      <div>
        <Card
          title="字段管理"
          extra={
            <Space>
              {checkButtonAuth(add) && (
                <WeDrawer.Form
                  title="新增字段"
                  name="新增字段"
                  api="add_anpassen"
                  data={{ channel_id: this.props.location.state.id }}
                  renderList={this.getData}
                  authorized={checkButtonAuth(add)}
                  {...this.props}
                >
                  <Detail />
                </WeDrawer.Form>
              )}
            </Space>
          }
        >
          <table width="100%" class="table-striped artlist col-left-1">
            <tr class="th">
              <td class="col-md-3">注释</td>
              <td class="col-md-1">字段名</td>
              <td class="col-md-1">数据类型</td>
              <td class="col-md-2">长度</td>
              <td class="col-md-1">显示类型</td>
              <td class="col-md-2">模型</td>
              <td class="col-md-2">操作</td>
            </tr>
            {fieldList &&
              fieldList.map((item, index) => (
                <tr>
                  <td>{item.remark}</td>
                  <td>{item.field}</td>
                  <td>{item.dtype}</td>
                  <td>{item.length}</td>
                  <td>{item.text_type}</td>
                  <td>{item.text_type}</td>
                  <td>
                    <WeDrawer.Form
                      title="编辑字段"
                      name="编辑"
                      action="edit"
                      api="update_anpassen"
                      data={{
                        id: item.id,
                        channel_id: item.channel_id,
                        coding,
                      }}
                      renderList={this.getData}
                      authorized={checkButtonAuth(edit)}
                      {...this.props}
                    >
                      <Detail />
                    </WeDrawer.Form>
                    <Confirm
                      name="删除"
                      config={{
                        operating: "delete",
                        message: React.$modalEnum,
                      }}
                      data={{ id: item.id }}
                      api="delete_columns"
                      renderList={this.getData}
                      authorized={checkButtonAuth(del)}
                      {...this.props}
                    />
                  </td>
                </tr>
              ))}
          </table>
        </Card>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.customize,
  }),
  dispatchToProps
)(CustomizeList);
