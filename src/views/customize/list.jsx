import React from "react";
import { Card, Space } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  getQuery,
} from "@/utils";

import { Confirm, WeDrawer, WeCheckbox, Status } from "@/components";
import Detail from "./components/detail";

const { add, del, edit } = authorized.customize;
const { customize: coding } = codings;

class CustomizeList extends React.Component {
  state = {
    params: {},
  };

  componentDidMount() {
    this.setState(
      {
        params: getQuery(),
      },
      () => {
        this.getData();
      }
    );
  }

  getData = () => {
    this.props.dispatch.select({
      api: "anpassen_field",
      data: {
        id: this.state.params.id,
      },
      node: "fieldList",
    });
  };

  render() {
    const { fieldList } = this.props.module;
    return (
      <div>
        <Card>
          <div className="nav-title">
            字段管理
            <span className="right">
              {
                <Space>
                  {checkButtonAuth(add) && (
                    <WeDrawer.Form
                      title="新增字段"
                      name="新增字段"
                      icon="add"
                      type="default"
                      api="add_anpassen"
                      data={{ channel_id: this.state.params.id }}
                      renderList={this.getData}
                      authorized={checkButtonAuth(add)}
                      {...this.props}
                    >
                      <Detail />
                    </WeDrawer.Form>
                  )}
                </Space>
              }
            </span>
          </div>
          <table width="100%" class="table-striped artlist col-left-1">
            <tr class="th">
              <td class="col-md-2 pl25">注释</td>
              <td class="col-md-1">字段名</td>
              <td class="col-md-1">数据类型</td>
              <td class="col-md-1">长度</td>
              <td class="col-md-1">显示类型</td>
              <td class="col-md-3">说明</td>
              <td class="col-md-2">操作</td>
            </tr>
            {fieldList &&
              fieldList.map((item, index) => (
                <tr>
                  <td className="pl25">{item.remark}</td>
                  <td>{item.field}</td>
                  <td>{item.dtype}</td>
                  <td>{item.length}</td>
                  <td>{item.text_type}</td>
                  <td>{item.explanation}</td>
                  <td>
                    <WeDrawer.Form
                      title="编辑字段"
                      name="编辑"
                      isText={true}
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
                    <span className="line">|</span>
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
