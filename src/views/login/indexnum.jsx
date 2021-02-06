import React from "react";
import { Card, Popover } from "antd";
import { connect, dispatchToProps, CountUp } from "@/utils";
import { Badge } from "@/components";

class Index extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.getDetail({
      api: "systemMessage",
      node: "system",
    });
  };

  route = (path, q = "") => {
    this.props.history.push(path);
    this.props.handle(q);
  };

  render() {
    const { system } = this.props.module;

    return (
      <Card>
        <span className="mr15">
          <CountUp end={100} />
        </span>
        <Popover
          placement="bottom"
          content={
            <div>
              <p onClick={() => this.route("/admin", "basic")}>
                <Badge content="留言" num={system.message_board} />
              </p>
              <p onClick={() => this.route("/admin", "basic")}>
                <Badge content="反馈" num={system.num_feedback} />
              </p>
              <p onClick={() => this.route("/admin", "basic")}>
                <Badge content="申请" num={system.num_link} />
              </p>
            </div>
          }
        >
          <span onClick={() => this.route("/admin", "basic")}>
            消息
            <Badge num={system.message} />
          </span>
        </Popover>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.common,
  }),
  dispatchToProps
)(Index);
