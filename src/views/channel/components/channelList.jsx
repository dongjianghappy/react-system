import React from 'react'
import { Drawer, Button, Row, Col, Card } from 'antd';

import { adminRouter } from '../../../router'
import { withRouter } from 'react-router-dom';
import ChannelForm from './channelForm'

const routers = adminRouter.filter(route => route.flag === 'channel')
const { Meta } = Card;


class ChannelList extends React.Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

   handel = path => {
    this.props.history.push(path)
    window.location.reload()
}

  render() {

    const { butName, title, type, width } = this.props
    return (
      <>
        { 
        
            this.props.type === 'text' ? 
            <span onClick={this.showDrawer}>{butName}</span>
            : <Button type={type || "default"} size="small" onClick={this.showDrawer}>{butName}</Button>
        }
        <Drawer
          title={title}
          width={620}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
            {this.props.children}
          <Button type="primary" onClick={this.showChildrenDrawer}>
            新增频道
          </Button>

          <Row>
        {
            routers.map((list, i) => (
            <Col key={i} span={6} style={{padding: 10}}>

                <Card
                    hoverable
                    style={{ width: 'auto' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" onClick={() => this.handel(list.path)} />}
                    
                >
                    <Meta title={ list.name } description="www.instagram.com" />
                    <p onClick={this.showChildrenDrawer}>编辑</p>
                </Card>
            </Col>
            ))
        }
        </Row>


          <Drawer
            title="新增频道"
            width={500}
            closable={false}
            onClose={this.onChildrenDrawerClose}
            visible={this.state.childrenDrawer}
          >
            <ChannelForm></ChannelForm>
          </Drawer>
        </Drawer>
      </>
    );
  }
}

export default withRouter(ChannelList)

