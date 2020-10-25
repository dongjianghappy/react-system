import React from 'react'
import { Drawer, Button, Row, Col, Card } from 'antd';

import { adminRouter } from '../../../router'
import { withRouter } from 'react-router-dom';
import ChannelForm from './channelForm'
import { checkButtonAuth } from '@/utils/auth'



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

  handel = (path) => {
    this.formRef.current.classList.remove("show")
    this.formRef.current.classList.add("hide")
    this.setState({
      visible: false,
    });
    this.props.click("/admin/"+path, path)
  }

  mouseOver = () => {
    debugger
    this.formRef.current.classList.remove("hide")
    this.formRef.current.classList.add("show")
    
  }

  mouseLeave = () => {
    debugger
    this.formRef.current.classList.remove("show")
    this.formRef.current.classList.add("hide")
    
  }
  

  render() {

    const { module } = React.$enums;
    const routers = module.filter(route => route.type === "plate")
    const channel = module.filter(route => route.type === "channel")
    const { title, type, width } = this.props
    return (
      <>
        <span onClick={this.showDrawer}><i className="iconfont icon-navicon font24"></i></span>

        <Drawer
          placement="left"
          
          style={{ top: 110 }}
          width={200}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >


            {this.props.children}
          <ul className="navigation">
        {
            routers.map((list, i) => (
                list.value === 'channel' ?
                <li key={i} className="channel" onMouseEnter={() => this.mouseOver()} onMouseLeave={() => this.mouseLeave()} >
                { list.name }
        <div ref={this.formRef} className="channel-wrap hide">
          <ul className="channel">
          {
            channel.map((item, index) => (
              
              checkButtonAuth(item.authority) ? 
              <li span={24} className="channel-list" onClick={() => this.handel(item.value)} >{ item.name }</li>
              : ""
            ))
          }
          </ul>
        </div>
                </li>
                :
                <li key={i} onClick={() => this.handel(list.value)}>
                { list.name }
                </li>
            ))
        }
        </ul>


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

