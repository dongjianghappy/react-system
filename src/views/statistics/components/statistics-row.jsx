import React from 'react'
import { Row, Col, Card, Statistic, Tabs  } from 'antd'

const { TabPane } = Tabs;

const Statistics = (props) => {



    return (
        <>
        <Row gutter={16}>
            <Col span={6}>
                <Card>
                <Statistic
                    title="IP"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                />
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                <Statistic
                    title="收索引擎"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                />
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                <Statistic
                    title="来路域名"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                />
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                <Statistic
                    title="浏览次数"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                />
                </Card>
            </Col>
        </Row>
        </>
    )
}

export default Statistics