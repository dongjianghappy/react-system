import React from "react";
import { Card, Space, Button } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  datetime,
} from "@/utils";

import { Confirm, WeCheckbox, WeModal } from "@/components";
import Detail from "./components/detail";
import CollectionNode from "./components/collection";

const { add, del, start } = authorized.collection.cate;
const { cate: coding } = codings.collection;

class Collection extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.select({
      api: "nodeList",
      data: {
        page: 0,
        pagesize: 10,
        coding: "O0008",
      },
      node: "nodeList",
    });
  };

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
              <WeModal.modalForm
                name="选择节点类型"
                data={{ coding }}
                renderList={this.getData}
                authorized={checkButtonAuth(add)}
                {...this.props}
              >
                <Detail />
              </WeModal.modalForm>
            </Space>
          </div>

          <table width="100%" class="table-striped artlist col-left-2">
            <tr class="th">
              <td class="col-md-1">选择</td>
              <td class="col-md-4">节点名称</td>
              <td class="col-md-2">创建节点日期</td>
              <td class="col-md-2">数量(入库/总共)</td>
              <td class="col-md-1">操作人</td>
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
                  <td>{item.name}</td>
                  <td>{datetime(item.datetime)}</td>
                  <td>
                    {item.num}/{item.tem_num}
                  </td>
                  <td>{item.uid}</td>
                  <td>
                    <WeModal.modalForm
                      name="开始采集"
                      isText={true}
                      width={650}
                      data={{ fid: item.id, coding }}
                      renderList={this.getData}
                      authorized={checkButtonAuth(add)}
                      api="collection"
                      {...this.props}
                    >
                      <CollectionNode />
                    </WeModal.modalForm>
                    <span className="line">|</span>
                    <span
                      onClick={() =>
                        this.props.history.push(
                          `/admin/collection/list?fid=${item.id}&name=${item.name}`
                        )
                      }
                    >
                      列表
                    </span>
                    <span style={{ padding: "0 5px" }}>|</span>
                    <span
                      onClick={() =>
                        this.props.history.push(
                          `/admin/collection/temlist?fid=${item.id}&name=${item.name}`
                        )
                      }
                    >
                      临时列表
                    </span>
                    <span style={{ padding: "0 5px" }}>|</span>
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
