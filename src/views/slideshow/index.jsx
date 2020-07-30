import React from 'react'
import { Card, Button, Row, Col, Avatar  } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Dialog } from '../../components'
import SlideshowFrom from './components/slideshowFrom'
import { Link } from 'react-router-dom';

const { Meta } = Card;

export default class Slideshow extends React.Component{

    render() {
        return (
            <Card 
                title="幻灯片管理"
                extra={
                    <Dialog type="text" butName="新增幻灯片" title="新增幻灯片">
                    <SlideshowFrom />
                  </Dialog>
                }
            >

                <Row>
                    <Col span={6}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <Link to="/admin/slideshow/list">
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                            </Link>
                        }
                        actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                        />
                    </Card>
                    </Col>
                </Row>
            </Card>
        )
    }
}