import React from "react";
import { List, Typography, DatePicker, Statistic, Card, Row, Col } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { connect, dispatchToProps } from "@/utils";
import { Chart, SelectList } from "@/components";

class Default extends React.Component {
  componentDidMount() {
    this.props.dispatch.select({
      api: "defaultStatistics",
      node: "visit",
    });

    // this.props.dispatch.defaultStatistics({
    //   fid: this.props.match.params.fid,
    // });
  }

  render() {
    const {
      user = 0,
      register,
      yes_register = 0,
      today_register = 0,
      order,
      article,
      tech,
      visit,
      hours = [],
      week,
      month,
    } = this.props.module.visit;

    return (
      <div>
        <div className="site-statistic-demo-card">
          <Row gutter={16}>
            <Col span={6}>
              <Card>
                <Row className="align_center">
                  <Col span={8}>
                    <Statistic
                      title="React"
                      value={visit && visit.total}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="Vue"
                      value={visit && visit.yesterday.pv}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="HTML5"
                      value={visit && visit.today.pv}
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
                      title="React"
                      value={visit && visit.total}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="Vue"
                      value={visit && visit.yesterday.pv}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="HTML5"
                      value={visit && visit.today.pv}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic
                  title="Nodejs"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Row>
                  <Col span={12}>
                    <Statistic
                      title="样式"
                      value={order && order.linkAll}
                      valueStyle={{ color: "#cf1322" }}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="技术"
                      value={order && order.linkOnline}
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
                  label={(week && hours.label) || []}
                  dataSource={[
                    (week && hours.value.today_visit) || [],
                    (week && hours.value.today_online) || [],
                    (week && hours.value.yestday_visit) || [],
                    (week && hours.value.yestday_online) || [],
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
