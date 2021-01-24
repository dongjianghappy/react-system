import React from "react";
import { Card, Space } from "antd";
import { connect, dispatchToProps } from "@/utils";
import Article from "./components/list-article";
import Picture from "./components/list-picture";
import "./components/style.less";

class Index extends React.Component {
  componentDidMount() {
    this.search();
  }

  search = (data) => {
    this.props.dispatch.getSearch({
      data: {
        search: data,
      },
    });
  };

  handle = () => {
    debugger;
    alert("sds");
  };

  // 关于关键词高亮问题，在接口中通过匹配后添加span标签并且返回来
  // 点击某条数据后打开当前展示弹窗页面，然后可以点击编辑和保存
  render() {
    const { list } = this.props.module;
    debugger;
    return (
      <Card>
        <ul className="search-wrap" style={{ maxWidth: 800 }}>
          {list &&
            list.map((item) =>
              item.image === "" ? (
                <Article dataSource={item} handleShow={this.handle} />
              ) : (
                <Picture dataSource={item} handleShow={this.handle} />
              )
            )}
        </ul>
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
