import React from "react";
import {
  List,
  Typography,
  Avatar,
  Statistic,
  Card,
  Row,
  Col,
  Tooltip,
} from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  getQuery,
} from "@/utils";

import ChartistGraph from "react-chartist";

class Default extends React.Component {
  state = {
    dataSource: {},
  };
  data = {
    labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
    series: [
      [1, 2, 4, 8, 6, -2, -1, -4, -6, -2],
      [1, 2, 4, 8, 9, -2, -1, 0, 2, 5],
      [1, 2, 4, 1, 2, -2, -1, 0, 2, 5],
    ],
    colors: ["#0f0", "#3f8600", "#000"],
  };

  options = {
    width: "100%",
    height: "400",
    high: 10,
    low: -10,
    // axisX: {
    //   labelInterpolationFnc: function(value, index) {
    //     return index % 2 === 0 ? value : null;
    //   }
    // }
  };

  componentDidMount() {
    const mod = window.location.pathname.split("/")[2] || "";
    const coding = codings[mod];

    this.props.dispatch
      .fetch({
        api: "userDefault",
        data: {
          coding: coding.art,
        },
      })
      .then((res) => {
        this.setState({
          dataSource: res.result,
        });
      });
  }

  type = "Line";

  render() {
    const {
      list,
      user = 0,
      ordinary_member = 0,
      senior_member = 0,
      yes_register = 0,
      today_register = 0,
    } = this.state.dataSource;

    return (
      <div className="site-statistic-demo-card">
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Row>
                <Col span={8}>
                  <Statistic
                    title="用户量"
                    value={user}
                    valueStyle={{ color: "#3f8600" }}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="昨日新增"
                    value={yes_register}
                    valueStyle={{ color: "#3f8600" }}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="今日新增"
                    value={today_register}
                    valueStyle={{ color: "#3f8600" }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Row>
                <Col span={12}>
                  <Statistic
                    title="今日登录"
                    value={123}
                    valueStyle={{ color: "#cf1322" }}
                  />
                </Col>
                <Col span={12}>
                  <Statistic
                    title="当前在线"
                    value={123}
                    valueStyle={{ color: "#3f8600" }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="普通会员"
                value={ordinary_member}
                valueStyle={{ color: "#cf1322" }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="高级会员"
                value={senior_member}
                valueStyle={{ color: "#3f8600" }}
              />
            </Card>
          </Col>

          <Col span={18} style={{ marginTop: 15 }}>
            <Card style={{ height: 450 }}>
              <ChartistGraph
                data={this.data}
                options={this.options}
                type={this.type}
              />
            </Card>
          </Col>
          <Col span={6} style={{ marginTop: 15 }}>
            <Card style={{ height: 250 }}>
              <Statistic
                title="天气"
                value={9.3}
                valueStyle={{ color: "#cf1322" }}
              />
            </Card>

            <Card style={{ marginTop: 15, height: 185 }}>
              <Statistic
                title="访客"
                value={9.3}
                valueStyle={{ color: "#cf1322" }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.channel,
  }),
  dispatchToProps
)(Default);
