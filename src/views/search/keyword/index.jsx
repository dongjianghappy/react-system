import React from "react";
import { Card, Space } from "antd";
import { connect, dispatchToProps, codings } from "@/utils";

const { keyword: coding } = codings.search;

class Index extends React.Component {
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
      node: "keyword",
    });
  };

  // 5、公告通知添加置顶字段

  // 6、搜索模块
  // 7、模板管理
  render() {
    const { keyword } = this.props.module;

    return (
      <Card>
        <div className="nav-title">关键词库</div>
        <table width="100%" class="table-striped table-hover col-left-2">
          <tr class="th">
            <td class="col-md-1">ID</td>
            <td class="col-md-6">关键词</td>
            <td class="col-md-1">浏览器类型</td>
            <td class="col-md-1">语言</td>
            <td class="col-md-1">操作系统</td>
            <td class="col-md-2">搜索时间</td>
          </tr>
          {keyword.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.keyword}</td>
              <td>{item.browser}</td>
              <td>{item.lang}</td>
              <td>{item.system}</td>
              <td>{item.datetime}</td>
            </tr>
          ))}
        </table>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.search,
  }),
  dispatchToProps
)(Index);
