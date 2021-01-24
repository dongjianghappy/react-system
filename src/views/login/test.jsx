import React from "react";
import { Card, Space } from "antd";
import { connect, dispatchToProps } from "@/utils";

class Index extends React.Component {
  componentDidMount() {}

  render() {
    return <Card></Card>;
  }
}

export default connect(
  (state) => ({
    module: state.search,
  }),
  dispatchToProps
)(Index);
