import React, { Fragment } from "react";
import { Button, Modal, message } from "antd";
// import { connect } from "react-redux";
// import dispatchToProps from "../../store/dispatch";

import { connect, dispatchToProps } from "@/utils";
import warning from "../modal/warning";
import Main from "@/views/space/components/content";

class ModalSpace extends React.Component {
  state = { visible: false, image: "" };

  showModal = () => {
    if (!this.props.authorized) {
      return warning();
    }
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    if (this.state.image.length === 0) {
      return message.info("请选择图片");
    }

    this.props.callback({
      image: [this.state.image],
    });
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  getData = (data) => {
    this.setState({
      image: data,
    });
  };

  render() {
    const { visible } = this.state;

    return (
      <Fragment>
        <div onClick={this.showModal}>{this.props.children}</div>

        <Modal
          title={"图片空间"}
          width={"80%"}
          visible={visible}
          onCancel={this.handleCancel}
          centered
          footer={
            this.props.footerBtn !== null
              ? [
                  <Button key="back" onClick={this.handleCancel}>
                    取消
                  </Button>,
                  <Button key="submit" type="primary" onClick={this.handleOk}>
                    确定
                  </Button>,
                ]
              : null
          }
        >
          <div
            className="relative"
            style={{
              height: 450,
              paddingTop: 50,
            }}
          >
            <Main show="modal" span="3" getData={this.getData}></Main>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

const stateToProops = (state) => {
  return {};
};

export default connect(stateToProops, dispatchToProps)(ModalSpace);
