import React from 'react'
import { Drawer, Button, Row, Col, Card, Tooltip } from 'antd';

import { adminRouter } from '@/router'
import { withRouter } from 'react-router-dom';
import { checkButtonAuth, channelInfo } from '@/utils/auth'


const { Meta } = Card;


class ChannelList extends React.Component {
  state = { visible: false, childrenDrawer: false };

  formRef = React.createRef();

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

  handel = (path) => {
    debugger
    this.setState({
      visible: false,
    });
    this.props.click("/admin/"+path, path)
  }

  render() {

    const { module } = React.$enums;
    const routers = module.filter(route => route.type === "plate")
    const channel = module.filter(route => route.type === "channel")
    const { title, type, width } = this.props
    return (
      <>
        <span onClick={this.showDrawer}>
        <Tooltip placement="bottom" title="频道"><i className="iconfont icon-app pointer"></i></Tooltip></span>

        <Drawer
          placement="right"
          style={{ top: 110 }}
          width={650}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Row>
          {
            
            channelInfo().map((item, index) => (
              <Col span={6} className="channel-list" onClick={() => this.handel(item.module)} >
                <Card className="m5 align_center">
                { item.name }
                </Card>
              </Col>
          ))
          
          }
          </Row>
        </Drawer>
      </>
    );
  }
}

export default withRouter(ChannelList)

