import React from "react";
import { Card, Space } from "antd";
import { connect, dispatchToProps } from "@/utils";
import { Kindeditor } from "@/components";
class Index extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Card>
        <Kindeditor value="123123123" />
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
