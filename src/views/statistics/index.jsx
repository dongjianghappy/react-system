import React from "react";
import { Statistic, Card, Row, Col } from "antd";
import { connect, dispatchToProps } from "@/utils";
import { Chart } from "@/components";

class Default extends React.Component {
  componentDidMount() {
    this.props.dispatch.select({
      api: "defaultStatistics",
      node: "chart",
    });
  }

  render() {
    const { order, max, visit, hours, week, month } = this.props.module.chart;

    return (
      <div>
        <div className="site-statistic-demo-card">
          <Row gutter={16}>
            <Col span={6}>
              <Card>
                <Row className="align_center">
                  <Col span={8}>
                    <Statistic
                      title="累计览量"
                      value={visit && visit.total_visit}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="昨日览量"
                      value={(visit && visit.yesterday.pv) || 0}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="今日览量"
                      value={(visit && visit.today.pv) || 0}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Row className="align_center">
                  <Col span={8}>
                    <Statistic
                      title="累计IP"
                      value={visit && visit.total_ip}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="昨日IP"
                      value={(visit && visit.yesterday.ip) || 0}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="今日IP"
                      value={(visit && visit.today.ip) || 0}
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
                      title="累计搜索"
                      value={order && order.linkAll}
                      valueStyle={{ color: "#cf1322" }}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="今日搜索"
                      value={order && order.linkOnline}
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
                      title="最高浏览"
                      value={max && max.pv}
                      valueStyle={{ color: "#cf1322" }}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="最高IP"
                      value={max && max.ip}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={18} style={{ marginTop: 15 }}>
              <Card title="今日与昨日访问量">
                <Chart.Line
                  title={["今日浏览量", "今日在线", "昨日浏览量", "昨日在线"]}
                  height={366}
                  label={(hours && hours.label) || []}
                  dataSource={[
                    (hours && hours.value.today_visit) || [],
                    (hours && hours.value.today_online) || [],
                    (hours && hours.value.yestday_visit) || [],
                    (hours && hours.value.yestday_online) || [],
                  ]}
                />
              </Card>
            </Col>
            <Col span={6} style={{ marginTop: 15 }}>
              <Chart.Pie height={278}></Chart.Pie>

              <div style={{ marginTop: 15 }}>
                <Chart.Line
                  title={["最近7天IP量"]}
                  className="graph-green"
                  label={(week && week.label) || []}
                  dataSource={[(week && week.value.ip) || []]}
                />
              </div>
            </Col>

            <Col span={10} style={{ marginTop: 15 }}>
              <Card title="最近7天访问量">
                <Chart.Line
                  title={["7天浏览量", "7天在线"]}
                  height={250}
                  className="graph-blue"
                  label={(week && week.label) || []}
                  dataSource={[
                    (week && week.value.visit) || [],
                    (week && week.value.online) || [],
                  ]}
                />
              </Card>
            </Col>

            <Col span={14} style={{ marginTop: 15 }}>
              <Card title="本月访问量">
                <Chart.Line
                  title={["本月浏览量", "本月IP量"]}
                  height={250}
                  className="graph-red"
                  label={(month && month.label) || []}
                  dataSource={[
                    (month && month.value.visit) || [],
                    (month && month.value.ip) || [],
                  ]}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.statistics,
  }),
  dispatchToProps
)(Default);
