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
            if (res.result.again) {
              const { action, model, method } = prams.data;
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

  main = (item) => {
    return (
      <tr>
        <td style={{ width: 120 }}>
          <Card style={{ height: 105 }}>
            <h3>{item.name}</h3>
          </Card>
        </td>
        <td>
          <Card>
            <Row>
              <Col span="24" style={{ paddingBottom: 10 }}>
                <span className="name">首页</span>
              </Col>
              <Col span="20" style={{ display: "flex" }}>
                <Progress percent={0} size="small" />
              </Col>
              <Col span="4" className="updateButton">
                <span
                  onClick={() =>
                    this.run({
                      title: `正在更新${item.name}首页`,
                      data: { action: "index", model: item.model },
                    })
                  }
                >
                  更新
                </span>
              </Col>
            </Row>
          </Card>
        </td>
        <td>
          <Card>
            <Row>
              <Col span="24" style={{ paddingBottom: 10 }}>
                <span className="name">单页</span>
              </Col>
              <Col span="20" style={{ display: "flex" }}>
                <Progress percent={0} size="small" />
              </Col>
              <Col span="4" className="updateButton">
                <span
                  onClick={() =>
                    this.run({
                      title: `正在更新${item.name}栏目页`,
                      data: { action: "single", model: "common_single" },
                    })
                  }
                >
                  更新
                </span>
              </Col>
            </Row>
          </Card>
        </td>
        <td>
          <Card>
            <Row>
              <Col span="24" style={{ paddingBottom: 10 }}>
                <span className="name">标签</span>
              </Col>

              <Col span="5" className="sort">
                <Popover
                  placement="bottom"
                  trigger="click"
                  content={
                    <div>
                      {Object.keys(this.sorter).map((key) => (
                        <p onClick={() => this.sort(item.id, key)}>
                          {this.sorter[key]}
                        </p>
                      ))}
                    </div>
                  }
                >
                  <span>排序: </span>
                  <span>{this.sorter[item.sort]}</span>
                </Popover>
              </Col>
              <Col span="8" className="limit" style={{ width: 150 }}>
                <Popover
                  placement="bottom"
                  trigger="click"
                  content={
                    <div>
                      <Input
                        defaultValue={item.limitStart}
                        maxLength={5}
                        style={{ width: 100 }}
                        onChange={(e) => this.change(e, item.id, "limitStart")}
                      />
                      <span className="pl15 pr15"> 至 </span>
                      <Input
                        defaultValue={item.limitEnd}
                        maxLength={5}
                        style={{ width: 100 }}
                        onChange={(e) => this.change(e, item.id, "limitEnd")}
                      />
                    </div>
                  }
                >
                  <span>
                    范围: {item.limitStart} - {item.limitEnd}
                  </span>
                </Popover>
              </Col>

              <Col span="9" style={{ display: "flex" }}>
                <Progress percent={0} size="small" />
              </Col>
              <Col span="2" className="updateButton">
                <span
                  onClick={() =>
                    this.run({
                      title: `正在更新标签页`,
                      data: {
                        action: "tag",
                        model: "source",
                        id: `${item.limitStart}-${item.limitEnd}`,
                        method: "desc",
                        total: item.limitEnd - item.limitStart,
                      },
                    })
                  }
                >
                  更新
                </span>
              </Col>
            </Row>
          </Card>
        </td>
      </tr>
    );
  };

  chanel = (item) => {
    return (
      <tr>
        <td style={{ width: 120 }}>
          <Card style={{ height: 105 }}>
            <h3>{item.name}</h3>
          </Card>
        </td>
        <td>
          <Card>
            <Row>
              <Col span="24" style={{ paddingBottom: 10 }}>
                <span className="name">首页</span>
              </Col>
              <Col span="20" style={{ display: "flex" }}>
                <Progress percent={0} size="small" />
              </Col>
              <Col span="4" className="updateButton">
                <span
                  onClick={() =>
                    this.run({
                      title: `正在更新${item.name}首页`,
                      data: { action: "index", model: item.model },
                    })
                  }
                >
                  更新
                </span>
              </Col>
            </Row>
          </Card>
        </td>
        <td>
          <Card>
            <Row>
              <Col span="24" style={{ paddingBottom: 10 }}>
                <span className="name">栏目</span>
              </Col>
              <Col span="20" style={{ display: "flex" }}>
                <Progress percent={0} size="small" />
              </Col>
              <Col span="4" className="updateButton">
                <span
                  onClick={() =>
                    this.run({
                      title: `正在更新${item.name}栏目页`,
                      data: { action: "menu", model: item.model },
                    })
                  }
                >
                  更新
                </span>
              </Col>
            </Row>
          </Card>
        </td>
        <td>
          <Card>
            <Row>
              <Col span="24" style={{ paddingBottom: 10 }}>
                <span className="name">详情</span>
              </Col>

              <Col span="5" className="sort">
                <Popover
                  placement="bottom"
                  trigger="click"
                  content={
                    <div>
                      {Object.keys(this.sorter).map((key) => (
                        <p onClick={() => this.sort(item.id, key)}>
                          {this.sorter[key]}
                        </p>
                      ))}
                    </div>
                  }
                >
                  <span>排序: </span>
                  <span>{this.sorter[item.sort]}</span>
                </Popover>
              </Col>
              <Col span="8" className="limit" style={{ width: 150 }}>
                <Popover
                  placement="bottom"
                  trigger="click"
                  content={
                    <div>
                      <Input
                        defaultValue={item.limitStart}
                        maxLength={5}
                        style={{ width: 100 }}
                        onChange={(e) => this.change(e, item.id, "limitStart")}
                      />
                      <span className="pl15 pr15"> 至 </span>
                      <Input
                        defaultValue={item.limitEnd}
                        maxLength={5}
                        style={{ width: 100 }}
                        onChange={(e) => this.change(e, item.id, "limitEnd")}
                      />
                    </div>
                  }
                >
                  <span>
                    范围: {item.limitStart} - {item.limitEnd}
                  </span>
                </Popover>
              </Col>

              <Col span="9" style={{ display: "flex" }}>
                <Progress percent={0} size="small" />
              </Col>
              <Col span="2" className="updateButton">
                <span
                  onClick={() =>
                    this.run({
                      title: `正在更新${item.name}详情页`,
                      data: {
                        action: "article",
                        model: item.model,
                        id: `${item.limitStart}-${item.limitEnd}`,
                        method: "desc",
                        total: item.limitEnd - item.limitStart,
                      },
                    })
                  }
                >
                  更新
                </span>
              </Col>
            </Row>
          </Card>
        </td>
      </tr>
    );
  };

  render() {
    const { data } = this.state;

    return (
      <>
        {this.state.visible ? <this.Infos /> : ""}

        <Card>
          <div className="nav-title">静态生成</div>
          <table
            width="100%"
            className="table-channel table-striped table-hover static-wrap"
          >
            {data && data.map((item, i) => item.id === "0" && this.main(item))}
          </table>
          <table
            width="100%"
            className="table-channel table-striped table-hover static-wrap"
          >
            {data &&
              data.map((item, i) => item.id !== "0" && this.chanel(item))}
          </table>
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
