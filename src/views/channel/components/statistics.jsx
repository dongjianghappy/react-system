import React from 'react'
import { Row, Col, Card, Statistic } from 'antd'

const Statistics = (props) => {



    return (
        <>
            <Card className="mb15">
            <Row gutter={16}>
                <Col span={6}>
                    <Card>
                    <Statistic
                        title="访问"
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                    />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                    <Statistic
                        title="点赞"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                    />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                    <Statistic
                        title="评论"
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                    />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                    <Statistic
                        title="下载"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                    />
                    </Card>
                </Col>
            </Row>
            </Card>
        </>
    )
}

export default Statistics