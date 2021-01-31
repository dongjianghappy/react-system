import React from "react";
import { Card } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  getQuery,
  datetime,
} from "@/utils";

import { Confirm, Status, WeCheckbox } from "@/components";
import { Operatinavbar } from "@/common";

const { del, edit } = authorized.collection.art;
const { art: coding } = codings.collection;

class CollectionList extends React.Component {
  state = {
    params: {},
    dataSource: {},
    request: {
      ...this.props.common.global.initPage,
    },
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

  getData = (data) => {
    const param = this.state.params.fid ? { fid: this.state.params.fid } : {};

    this.props.dispatch.select({
      data: {
        coding: coding,
        ...param,
        ...this.state.request,
        ...data,
      },
      node: "nodeList",
    });
  };

  render() {
    const { nodeList } = this.props.module;
    const { params } = this.state;
    return (
      <div>
        <Card title={`${params.name ? params.name : "所有"}采集列表`}>
          <table width="100%" class="table-striped artlist col-left-23">
            <tr class="th">
              <td class="col-md-1">选择</td>
              <td class="col-md-4">标题</td>
              <td class="col-md-2">节点</td>
              <td class="col-md-2">入库时间</td>
              <td class="col-md-2">状态</td>
              <td class="col-md-1">操作</td>
            </tr>
            {nodeList &&
              nodeList.map((item, index) => (
                <tr>
                  <td>
                    <WeCheckbox
                      data={{ id: item.id }}
                      {...this.props}
                    ></WeCheckbox>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.content}</td>
                  <td>{datetime(item.datetime)}</td>
                  <td>
                    <Status
                      data={{ item, field: "checked", coding }}
                      authorized={checkButtonAuth(edit)}
                      {...this.props}
                    />
                  </td>
                  <td>
                    <Confirm
                      name="删除"
                      config={{
                        operating: "delete",
                        message: React.$modalEnum,
                      }}
                      data={{ coding, id: item.id }}
                      api="delete"
                      renderList={this.getData}
                      authorized={checkButtonAuth(del)}
                      {...this.props}
                    />
                  </td>
                </tr>
              ))}
          </table>
          <Operatinavbar
            button={["all", "delete", "open", "close"]}
            data={{ list: module.checkedList, coding }}
            renderList={this.props.getData}
            checkButtonAuth={checkButtonAuth}
            authorized={authorized}
            {...this.props}
          />
        </Card>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    common: state.common,
    module: state.collection,
  }),
  dispatchToProps
)(CollectionList);
