import React from "react";
import { Card, Row, Col, Input, Popover, Progress } from "antd";

import { connect, dispatchToProps } from "@/utils";

import "./tablelist.less";

class Static extends React.Component {
  // 范围默认是是数据库中查询出来的
  state = {
    visible: false,
    title: "",
    status: "进行中",
    bar: 0,
  };

  sorter = {
    desc: "递减",
    asc: "递增",
  };

  componentDidMount() {
    this.props.dispatch
      .fetch({
        api: "static",
      })
      .then((res) => {
        this.setState({
          data: res.result,
        });
      });
  }

  sort = (id, data) => {
    this.state.data.map((item) => {
      if (item.id === id) {
        item.sort = data;
      }
    });

    this.setState({
      data: this.state.data,
    });
  };

  change = (e, id, field) => {
    const { value } = e.target;
    let val = "";

    if (value.length > 1 && value.substr(0, 1) === "0") {
      val = value.substr(1);
    } else {
      val = value;
    }

    this.state.data.map((item) => {
      if (item.id === id) {
        item[field] = val === "" ? 1 : val;
      }
    });

    this.setState({
      data: this.state.data,
    });
  };

  run = (prams) => {
    this.setState({
      title: prams.title,
      status: "请稍等...",
      bar: prams.bar || 0,
      visible: true,
    });

    this.props.dispatch
      .fetch({
        api: "updateStatic",
        data: {
          ...prams.data,
        },
      })
      .then((res) => {
        this.setState(
          {
            status: res.result.status,
            bar: res.result.bar,
          },
          () => {
            const { type, bar, id, name, loop } = res.result;

            if (res.result.again) {
              const { action, model, method } = prams.data;

              // 分类
              if (type === "cat") {
                this.run({
                  title: prams.title,
                  bar: res.result.bar,
                  data: {
                    model,
                    action,
                    id,
                    loop,
                  },
                });
              } else {
                this.run({
                  title: prams.title,
                  bar: res.result.bar,
                  data: {
                    action,
                    model,
                    id: res.result.outset,
                    method,
                    total: res.result.total,
                  },
                });
              }
            } else {
              setTimeout(() => {
                this.setState({
                  visible: false,
                });
              }, 2000);
            }
          }
        );
      });
  };

  Infos = () => (
    <>
      <div id="screen" style={{ display: "block" }}></div>
      <div
        style={{
          background: "#fff",
          position: "fixed",
          top: "50%",
          left: "50%",
          zIndex: 1000,
          marginTop: -75,
          marginLeft: -200,
          padding: 32,
          width: 400,
          height: 150,
        }}
        visible={this.state.visible}
        title={"sdsd"}
        content={<Progress percent={30} />}
        onOk={false}
      >
        <div className="mb15">
          {this.state.title} {this.state.status}
        </div>
        <div>
          <Progress percent={this.state.bar} />
        </div>
      </div>
    </>
  );

  render() {
    const { data } = this.state;

    return (
      <>
        <Card>
          <Row>
            <Col span="24" style={{ paddingBottom: 10 }}>
              <span className="name"></span>
            </Col>
            <Col span="20" style={{ display: "flex" }}>
              <Progress percent={0} size="small" />
            </Col>
            <Col span="4" className="updateButton">
              <span
                onClick={() =>
                  this.run({
                    title: `正在更新`,
                    data: { action: "menu", model: "source" },
                  })
                }
              >
                更新
              </span>
            </Col>
          </Row>
        </Card>
      </>
    );
  }
}

export default connect(
  (state) => ({
    module: state.navigation,
  }),
  dispatchToProps
)(Static);
