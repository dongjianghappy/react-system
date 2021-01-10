import React from "react";
import { Card } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import { Confirm, WeCheckbox } from "@/components";

const { del } = authorized.service.resume;
const { resume: coding } = codings.service;

class Resume extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding,
      },
      node: "resume",
    });
  };

  render() {
    const { resume } = this.props.module;

    return (
      <Card title="职位管理">
        <table width="100%" class="table-striped artlist col-left-7">
          <tr class="th">
            <td class="col-md-1">选择</td>
            <td class="col-md-1">编号</td>
            <td class="col-md-1">姓名</td>
            <td class="col-md-1">性别</td>
            <td class="col-md-2">年龄</td>
            <td class="col-md-1">学历</td>
            <td class="col-md-2">专业</td>
            <td class="col-md-2">申请时间</td>
            <td class="col-md-1">操作</td>
          </tr>
          {resume &&
            resume.map((item, index) => (
              <tr className="tr-list">
                <td>
                  <WeCheckbox
                    data={{ id: item.id }}
                    {...this.props}
                  ></WeCheckbox>
                </td>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.sex}</td>
                <td>{item.birthday}</td>
                <td>{item.educational}</td>
                <td>{item.specialty}</td>
                <td>{item.datetime}</td>
                <td>
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
)(Resume);
