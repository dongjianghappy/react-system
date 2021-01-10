import React from "react";
import { Card } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  getQuery,
} from "@/utils";

import { Confirm, Status, WeCheckbox } from "@/components";
import { Operatinavbar } from "@/common";

const { del, edit } = authorized.collection.art;
const { artTem: coding } = codings.collection;

class CollectionList extends React.Component {
  state = {
    params: {},
    dataSource: {},
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
    const param = this.state.params.fid ? { fid: this.state.params.fid } : {};

    this.props.dispatch.select({
      api: "temCollectionList",
      data: {
        page: 0,
        pagesize: 10,
        coding: coding,
        ...param,
      },
      node: "nodeList",
    });
  };

  handleClick = (data) => {
    this.props[data.dispatch](data);
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
              <td class="col-md-7">标题</td>
              <td class="col-md-2">采集时间</td>
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
                  <td>{item.datetime}</td>
                  <td>
                    {item.num === 0 ? (
                      <Confirm
                        name="入库"
                        config={{
                          operating: "import",
                          message: React.$modalEnum,
                        }}
                        data={{ coding, id: item.id }}
                        api="collectionImport"
                        renderList={this.getData}
                        authorized={checkButtonAuth(del)}
                        {...this.props}
                      />
                    ) : (
                      "已导入"
                    )}

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
    module: state.collection,
  }),
  dispatchToProps
)(CollectionList);
