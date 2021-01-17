import React from "react";
import { List, Typography, Avatar, Statistic, Card, Row, Col } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { connect, dispatchToProps } from "@/utils";
import { Chart } from "@/components";

class Default extends React.Component {
  componentDidMount() {
    this.props.dispatch.getDefault({
      fid: this.props.match.params.fid,
    });
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
      hours = [],
      week,
    } = this.props.module.list;

    return (
      <div>
        <div className="site-statistic-demo-card">
          <Row gutter={16}>
            <Col span={6}>
              <Card>
                <Row className="align_center">
                  <Col span={8}>
                    <Statistic
                      title="用户总量"
                      value={user.total}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="昨日注册"
                      value={user.yesterday}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="今日注册"
                      value={user.today}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic
                  title="业绩"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: "#cf1322" }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic
                  title="消息"
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
                      title="订单总量"
                      value={order && order.linkAll}
                      valueStyle={{ color: "#cf1322" }}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="在线订单"
                      value={order && order.linkOnline}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={18} style={{ marginTop: 15 }}>
              <Chart.Day
                dataSource={hours}
                type="Line"
                title={["昨日访问", "今日访问"]}
              />
            </Col>
            <Col span={6} style={{ marginTop: 15 }}>
              <div>
                <Chart.Week
                  title="一周访问量"
                  type="Line"
                  className="graph-green"
                  // dataSource={[[0, 3, 2, 8, 0, 0, 8]]}
                  dataSource={[(week && week.visit) || []]}
                />
              </div>

              <div style={{ marginTop: 15, height: 185 }}>
                <Chart.Week
                  title="一周注册量"
                  type="Bar"
                  className="graph-red"
                  dataSource={[(week && week.register) || []]}
                />
              </div>
            </Col>

            <Col span={12} style={{ marginTop: 15 }}>
              <Card style={{ height: 350 }}>
                {article &&
                  article.map((item, index) => (
                    <List.Item key={item.id}>
                      【{item.parent}】{item.title}
                    </List.Item>
                  ))}
              </Card>
            </Col>

            <Col span={12} style={{ marginTop: 15 }}>
              <Card style={{ height: 350 }}>
                {tech &&
                  tech.map((item, index) => (
                    <List.Item key={item.id}>
                      【{item.parent}】{item.title}
                    </List.Item>
                  ))}
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
