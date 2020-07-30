import React from 'react'
import { Row, Col, Card } from 'antd'
import { withRouter } from 'react-router-dom'
import { adminRouter } from '../router'

const routers = adminRouter.filter(route => route.flag === 'channel')
const { Meta } = Card;
const Channel = (props) => {

    const handel = path => {
        props.history.push(path)
        window.location.reload()
    }

    return (
        <Row>
        {
            routers.map((list, i) => (
            <Col key={i} span={6} style={{padding: 10}}>

                <Card
                    hoverable
                    style={{ width: 'auto' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    onClick={() => handel(list.path)}
                >
                    <Meta title={ list.name } description="www.instagram.com" />
                </Card>
            </Col>
            ))
        }
        </Row>
    )
}

export default withRouter(Channel)
