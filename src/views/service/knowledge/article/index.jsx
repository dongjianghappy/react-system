import React from "react";

import { Card, Space, Button, Popover } from "antd";
import {
  dispatchToProps,
  connect,
  checkButtonAuth,
  authorized,
  codings,
  getQuery,
} from "@/utils";
import { Confirm, WeCheckbox, Sorter, Status, WeModal } from "@/components";

const { art: coding, cate: catcoing } = codings.knowledge;

class Index extends React.Component {
  state = {
    params: {},
    coding: {},
  };

  componentDidMount() {
    this.setState(
      {
        params: getQuery(),
        coding: codings.knowledge,
      },
      () => {
        this.getData({
          management_checked: 1,
        });
        this.props.dispatch.getFlagAction();
      }
    );
  }

  getData = (params = {}) => {
    this.state.params.fid && (params.fid = this.state.params.fid);

    this.props.dispatch.select({
      api: "knowledgeList",
      data: {
        coding: this.state.coding.art,
        page: 0,
        pagesize: 15,
        ...params,
      },
    });
  };

  handleClick = (data) => {
    this.props[data.dispatch](data);
  };

  render() {
    const { list } = this.props.module;

    return (
      <Card
        title="知识管理"
        extra={
          checkButtonAuth("add") && (
            <Button
              type="default"
              onClick={() => this.props.history.push(`/admin/knowledge/detail`)}
              authorized={checkButtonAuth("add")}
            >
              新增知识
            </Button>
          )
        }
      >
        <table
          width="100%"
          className="table-striped table-hover artlist col-left-3"
        >
          <tr className="th">
            <td className="col-md-1">选择</td>
            <td className="col-md-1 sorter">
              <Sorter title="ID" renderList={this.getData} field="id" />
            </td>
            <td className="col-md-3">名称</td>
            <td className="col-md-2">知识分类</td>
            <td className="col-md-1">浏览</td>
            <td className="col-md-1">发布时间</td>
            <td className="col-md-1">状态</td>
            <td className="col-md-2">操作</td>
          </tr>
          {list.map((item, index) => (
            <tr class="tr-list">
              <td>
                <WeCheckbox data={{ id: item.id }} {...this.props}></WeCheckbox>
              </td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <WeModal.Cate
                  {...this.props}
                  data={{ id: item.id, coding, catcoing }}
                >
                  {item.parent ? item.parent : "未分类"}
                </WeModal.Cate>
              </td>
              <td>{item.visit}</td>
              <td>{item.datetime}</td>
              <td>
                <Status
                  {...this.props}
                  data={{ item, field: "checked", coding }}
                  authorized={checkButtonAuth("edit")}
                />
              </td>
              <td>
                <Space size="middle">
                  <span
                    disabled={!checkButtonAuth("del")}
                    onClick={() =>
                      this.props.history.push(
                        `/admin/knowledge/detail?id=${item.id}`
                      )
                    }
                  >
                    编辑
                  </span>
                  <Confirm
                    name="删除"
                    config={{
                      operating: "remove",
                      message: React.$modalEnum,
                    }}
                    data={{ coding, id: item.id }}
                    api="delete"
                    renderList={this.getData}
                    authorized={checkButtonAuth("del")}
                    {...this.props}
                  />
                  <Confirm
                    {...this.props}
                    name={item.istop === "1" ? "取消" : "置顶"}
                    config={{
                      operating: item.istop === "1" ? "cancelTop" : "setTop",
                      message: React.$modalEnum.top,
                    }}
                    data={{
                      coding,
                      id: item.id,
                      field: "istop",
                      value: item.istop === "1" ? "0" : "1",
                    }}
                    api="changeData"
                    renderList={this.getData}
                    authorized={checkButtonAuth("del")}
                  />
                </Space>
              </td>
            </tr>
          ))}
        </table>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.knowledge,
  }),
  dispatchToProps
)(Index);
