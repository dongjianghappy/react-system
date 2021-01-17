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
import { Chart } from "@/components";

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
      week,
      year,
    } = this.state.dataSource;

    return (
      <div className="site-statistic-demo-card">
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Row className="align_center">
                <Col span={8}>
                  <Statistic
                    title="用户量"
                    value={user.total}
                    valueStyle={{ color: "#3f8600" }}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="昨日新增"
                    value={user.yesterday}
                    valueStyle={{ color: "#3f8600" }}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="今日新增"
                    value={user.today}
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
            <Chart.Year
              title="2020年用户注册量"
              type="Line"
              className="graph-green"
              // dataSource={[[0, 3, 2, 8, 0, 0, 1]]}
              dataSource={[(year && year.register) || []]}
            />
          </Col>
          <Col span={6} style={{ marginTop: 15 }}>
            <div>
              <Chart.Week
                title="一周注册量"
                type="Bar"
                height={250}
                className="graph-red"
                dataSource={[(week && week.register) || []]}
              />
            </div>
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
