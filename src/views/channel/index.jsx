import React from "react";
import { List, Typography, Avatar, Statistic, Card, Row, Col } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { checkButtonAuth, authorized, codings } from "@/utils";
import { Confirm, WeCheckbox, WeDrawer } from "@/components";
import ChartistGraph from "react-chartist";

export default class Domain extends React.Component {
  data = {
    labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
    series: [
      [1, 2, 4, 8, 6, -2, -1, -4, -6, -2],
      [1, 2, 4, 8, 9, -2, -1, -4, -6, -2],
    ],
    colors: ["#0f0", "#00f"],
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

  type = "Line";

  render() {
    return (
      <div className="site-statistic-demo-card">
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Row>
                <Col span={8}>
                  <Statistic
                    title="用户量"
                    value={12}
                    valueStyle={{ color: "#3f8600" }}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="昨日新增"
                    value={34}
                    valueStyle={{ color: "#3f8600" }}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="今日新增"
                    value={45}
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
                title="高级会员"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
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
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>

            <Card style={{ marginTop: 15, height: 185 }}>
              <Statistic
                title="访客"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
