import React from "react";
import { Card, Row, Col, Input, Button } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import { Status, WeDrawer, ModalSpace } from "@/components";
import AddFrom from "./components/addFrom";

const { add, edit } = authorized.slideshow.art;
const { art: coding } = codings.slideshow;

class SlideshowList extends React.Component {
  state = {
    content: [],
    current: "", // 当保存成功后状态消失，其实在页面顺序更新后，在列表右侧可以新增一个刷新的按钮
  };

  componentDidMount() {
    this.props.dispatch
      .fetch({
        api: "slideshowList",
        data: {
          fid: this.props.location.state.fid,
        },
      })
      .then((res) => {
        this.setState({
          content: res.result,
        });
      });
  }

  onMove = (direction, moveItem, index) => {
    const newData = [...this.state.content];
    const item = newData.splice(
      index + (direction === "up" ? -1 : 1),
      1,
      moveItem
    )[0]; // 这一步是将要替换的删除，并将移动的插入，最后返回被删除的数组
    newData[index] = item;
    this.setState({
      current: index + (direction === "up" ? -1 : 1),
      content: newData,
    });
    debugger;
  };

  render() {
    return (
      <Card
        title="轮播图设置"
        extra={
          checkButtonAuth("add") ? (
            <WeDrawer.Form
              name="添加轮播图"
              icon="add"
              data={{ coding }}
              renderList={this.getData}
              authorized={checkButtonAuth(add)}
              {...this.props}
            >
              <AddFrom />
            </WeDrawer.Form>
          ) : (
            ""
          )
        }
      >
        {this.state.content.map((item, index) => (
          <Row
            style={{
              marginTop: 15,
              background: index === this.state.current ? "#f00" : "none",
            }}
          >
            <Col span={6}>
              <ModalSpace authorized={checkButtonAuth(edit)}>
                <img src={item.image} width="250" height="100" alt="" />
              </ModalSpace>
            </Col>
            <Col span={14}>
              <div>
                图片地址：
                <Input
                  placeholder="图片地址"
                  style={{ width: 350 }}
                  value={item.title}
                />
              </div>
              <div style={{ marginTop: 5 }}>
                连接地址：
                <Input
                  placeholder="链接地址"
                  style={{ width: 350 }}
                  value={item.url}
                />
              </div>
              <div style={{ marginTop: 5 }}>
                文字说明：
                <Input
                  placeholder="文字说明"
                  style={{ width: 350 }}
                  value={item.description}
                />
              </div>
            </Col>
            <Col span={2}>
              <Status
                data={{ item, field: "status", coding }}
                authorized={checkButtonAuth("edit")}
                {...this.props}
              />
            </Col>
            <Col span={2}>
              <div style={{ width: 100, height: 32, float: "left" }}>
                {index !== 0 ? (
                  <Button onClick={() => this.onMove("up", item, index)}>
                    上移动
                  </Button>
                ) : (
                  ""
                )}
              </div>
              <div style={{ width: 100, height: 32, float: "left" }}>
                {index !== this.state.content.length - 1 ? (
                  <Button onClick={() => this.onMove("down", item, index)}>
                    下移动
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </Col>
          </Row>
        ))}
        <Button style={{ marginTop: 25 }}>保存</Button>
      </Card>
    );
  }
}

const stateToProops = (state) => {
  return {
    module: state.slideshow,
  };
};

export default connect(stateToProops, dispatchToProps)(SlideshowList);
