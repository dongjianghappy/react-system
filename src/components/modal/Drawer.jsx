import React from 'react'
import { Drawer, Button } from 'antd';

export default class Drawers extends React.Component {
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
          width={520}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
            {this.props.children}
          <Button type="primary" onClick={this.showChildrenDrawer}>
            Two-level drawer
          </Button>
          <Drawer
            title="Two-level Drawer"
            width={320}
            closable={false}
            onClose={this.onChildrenDrawerClose}
            visible={this.state.childrenDrawer}
          >
            This is two-level drawer
          </Drawer>
        </Drawer>
      </>
    );
  }
}
