import React from "react";
import { Card } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { Confirm, Status, WeCheckbox } from "@/components";

const { del, edit } = authorized.collection.art;
const { art: coding } = codings.collection;

class CollectionList extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 10,
        coding: coding,
      },
      node: "nodeList",
    });
  };
  componentDidMount() {
    this.getData();
  }

  handleClick = (data) => {
    this.props[data.dispatch](data);
  };

  render() {
    const { nodeList } = this.props.module;
    return (
      <div>
        <Card title="采集列表">
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
                  <td>{item.datetime}</td>
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
        </Card>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.collection,
  }),
  dispatchToProps
)(CollectionList);
