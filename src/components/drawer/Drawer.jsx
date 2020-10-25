import React from 'react'
import { Drawer, Button } from 'antd';

 export default class Drawers extends React.Component {
  state = { visible: false };

  componentDidMount() {
    // 当状态抽屉状态为true时则更新状态值
    if(this.props.global.drawer.status){
      this.setState({
        visible: true,
      });
    }
  }

  onClose = () => {
    this.setState({
      visible: false,
    });

    // 延时更改状态，修复抽屉滑动隐藏
    setTimeout(() => {
      this.props.colse(
        {popup: this.props.popup}
      )
  }, 300)


  };

  render() {
    const { title } = this.props.global.drawer
    return (
      <>
        <Drawer
          title={title}
          width={500}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              {/* <Button onClick={this.onClose} type="primary">
                Submit
              </Button> */}
            </div>
          }
        >
          {this.props.children}
        </Drawer>
      </>
    );
  }
}