import React from "react";
import { Card, Space } from "antd";
import { connect, dispatchToProps, codings } from "@/utils";
import { WeModal, BasicInfo } from "@/components";

const { config: coding } = codings.search;
class Index extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.select({
      api: "basicInfo",
      data: {
        coding,
      },
      node: "config",
    });
  };
  render() {
    const { config } = this.props.module;
    debugger;
    return (
      <Card title="搜索设置">
        <BasicInfo
          title="基本信息"
          dataSource={config}
          data={{ coding }}
          renderList={this.getData}
          {...this.props}
        ></BasicInfo>
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
