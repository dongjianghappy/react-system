import React from "react";
import { Card, Space } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { Confirm, WeCheckbox, WeDrawer } from "@/components";
import Detail from "./components/detail";

const { add, del, edit } = authorized.service.job;
const { job: coding } = codings.service;

class Job extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding,
      },
      node: "job",
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { job } = this.props.module;

    return (
      <Card
        title="职位管理"
        extra={
          <Space>
            {checkButtonAuth(add) ? (
              <WeDrawer.Form
                name="新增职位"
                icon="add"
                data={{ coding }}
                renderList={this.getData}
                authorized={checkButtonAuth(add)}
                {...this.props}
              >
                <Detail />
              </WeDrawer.Form>
            ) : (
              ""
            )}
          </Space>
        }
      >
        <table width="100%" class="table-striped artlist col-left-34">
          <tr class="th">
            <td class="col-md-1">选择</td>
            <td class="col-md-1">编号</td>
            <td class="col-md-3">职位名称</td>
            <td class="col-md-1">部门</td>
            <td class="col-md-1">人数</td>
            <td class="col-md-2">发布时间</td>
            <td class="col-md-1">状态</td>
            <td class="col-md-2">操作</td>
          </tr>
          {job &&
            job.map((item, index) => (
              <tr className="tr-list">
                <td>
                  <WeCheckbox
                    data={{ id: item.id }}
                    {...this.props}
                  ></WeCheckbox>
                </td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.post}</td>
                <td>{item.number}</td>
                <td>{item.datetime}</td>
                <td>{item.status}</td>
                <td>
                  <WeDrawer.Form
                    {...this.props}
                    title="编辑职位"
                    name="编辑"
                    isText={true}
                    action="edit"
                    data={{ id: item.id, coding }}
                    renderList={this.getData}
                    authorized={checkButtonAuth(edit)}
                  >
                    <Detail />
                  </WeDrawer.Form>
                  <Confirm
                    {...this.props}
                    name="删除"
                    config={{
                      operating: "delete",
                      message: React.$modalEnum,
                    }}
                    data={{ coding, id: item.id }}
                    api="delete"
                    renderList={this.getData}
                    authorized={checkButtonAuth(del)}
                  />
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
    module: state.service,
  }),
  dispatchToProps
)(Job);
