import React from "react";
import { Card, Space } from "antd";
import { connect, dispatchToProps } from "@/utils";
import Channel from "../layout/components/position/components/channel";

class Index extends React.Component {
  componentDidMount() {
    this.props.dispatch
      .fetch({
        api: "Detect",
      })
      .then((res) => {
        sessionStorage.setItem("channel", JSON.stringify(res.result.channel));
        sessionStorage.setItem("menuList", JSON.stringify(res.result.menuList));
      });
  }

  render() {
    return (
      <Card>
        <Channel />
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
