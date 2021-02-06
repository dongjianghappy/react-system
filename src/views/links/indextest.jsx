import React from "react";
import { Card, Space } from "antd";
import { connect, dispatchToProps } from "@/utils";

class Index extends React.Component {
  componentDidMount() {
    this.props.dispatch
      .fetch({
        api: "routerTest",
      })
      .then((res) => {
        sessionStorage.setItem("new_menuList", JSON.stringify(res.result));
      });
  }

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
