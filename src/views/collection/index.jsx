import React from "react";
import { Card, Space, Button } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { Confirm, WeCheckbox } from "@/components";

const { add, del, start } = authorized.collection.cate;
const { cate: coding } = codings.collection;

class Collection extends React.Component {
  componentDidMount() {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 10,
        coding: "O0008",
      },
      node: "nodeList",
    });
  }

  handleClick = (data) => {
    this.props[data.dispatch](data);
  };

  render() {
    const { nodeList } = this.props.module;
    return (
      <div>
        <Card>
          <div style={{ marginBottom: 15 }}>
            <Space>
              <Button type="primary">采集列表</Button>
              <Button type="primary">选择节点类型</Button>
            </Space>
          </div>

          <table width="100%" class="table-striped artlist col-left-3">
            <tr class="th">
              <td class="col-md-1">选择</td>
              <td class="col-md-1">顺序</td>
              <td class="col-md-4">节点名称</td>
              <td class="col-md-2">创建节点日期</td>
              <td class="col-md-2">入库时间</td>
              <td class="col-md-2">操作</td>
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
                  <td>{item.sort}</td>
                  <td>{item.name}</td>
                  <td>{item.content}</td>
                  <td>{item.datetime}</td>
                  <td>
                    开始采集 | 内容 |
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
)(Collection);
