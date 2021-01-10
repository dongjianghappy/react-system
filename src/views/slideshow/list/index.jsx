import React from "react";
import { Card, Row, Col, Input, Button, message } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  getQuery,
} from "@/utils";
import { Status, WeDrawer, WeModal } from "@/components";
import Detail from "./components/detail";

const { add, edit } = authorized.slideshow.art;
const { art: coding } = codings.slideshow;

class SlideshowList extends React.Component {
  state = {
    content: [],
    current: "", // 当保存成功后状态消失，其实在页面顺序更新后，在列表右侧可以新增一个刷新的按钮
    form: [],
    params: {},
  };

  componentDidMount() {
    this.setState(
      {
        params: getQuery(),
      },
      () => {
        this.getData();
      }
    );
  }

  getData = () => {
    this.props.dispatch
      .fetch({
        api: "slideshowList",
        data: {
          fid: this.state.params.fid,
        },
      })
      .then((res) => {
        let arr = [];
        res.result.map((item) => {
          arr.push({
            id: item.id,
            title: item.title,
            url: item.url,
            image: item.image,
          });
        });

        this.setState({
          content: res.result,
          form: arr,
        });
      });
  };

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

    let arr = [];
    newData.map((item, index) => {
      arr.push({
        id: item.id,
        sort: 1 + index,
        title: item.title,
        url: item.url,
        image: item.image,
      });
    });

    this.setState({
      form: arr,
    });
  };

  handleInput(e, data) {
    this.state.form.map((item) => {
      if (item.id === data.id) {
        item[data.field] = e.target.value;
      }
    });

    this.setState({
      form: this.state.form,
    });
  }

  handleSave() {
    this.props.dispatch
      .update({
        data: {
          coding,
          list: this.state.form,
        },
      })
      .then((res) => {
        return message.info("编辑成功");
        this.getData();
      });
  }

  callback = (params) => {
    this.props.dispatch
      .fetch({
        api: "saveImage",
        data: {
          coding,
          id: params.id,
          image: params.image[0],
        },
      })
      .then((res) => {
        this.getData();
      });
  };

  render() {
    return (
      <Card
        title="轮播图设置"
        extra={
          checkButtonAuth("add") && (
            <WeDrawer.Form
              name="添加轮播图"
              icon="add"
              data={{ coding }}
              renderList={this.getData}
              authorized={checkButtonAuth(add)}
              {...this.props}
            >
              <Detail />
            </WeDrawer.Form>
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
              <WeModal.Space
                authorized={true}
                data={{ id: item.id }}
                callback={this.callback}
              >
                <img src={item.image} width="250" height="100" alt="" />
              </WeModal.Space>
            </Col>
            <Col span={12}>
              <div>
                <Input
                  addonBefore="图片地址"
                  style={{ width: 450 }}
                  value={item.image}
                  onChange={(e) =>
                    this.handleInput(e, { id: item.id, field: "image" })
                  }
                />
              </div>
              <div style={{ marginTop: 5 }}>
                <Input
                  addonBefore="连接地址"
                  style={{ width: 450 }}
                  value={item.url}
                  onChange={(e) =>
                    this.handleInput(e, { id: item.id, field: "url" })
                  }
                />
              </div>
              <div style={{ marginTop: 5 }}>
                <Input
                  addonBefore="文字说明"
                  style={{ width: 450 }}
                  value={item.title}
                  onChange={(e) =>
                    this.handleInput(e, { id: item.id, field: "title" })
                  }
                />
              </div>
            </Col>
            <Col
              span={3}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Status
                data={{ item, field: "checked", coding }}
                authorized={checkButtonAuth(edit)}
                {...this.props}
              />
            </Col>
            <Col
              span={3}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => this.onMove("up", item, index)}
                className="deg180"
                style={{ width: 60, height: 60 }}
              >
                <i className="iconfont icon-arrow1 moving"></i>
              </Button>
              <Button
                onClick={() => this.onMove("down", item, index)}
                style={{ width: 60, height: 60 }}
              >
                <i className="iconfont icon-arrow1"></i>
              </Button>
            </Col>
          </Row>
        ))}
        <Button
          type="primary"
          size="large"
          onClick={() => this.handleSave()}
          style={{ marginTop: 25 }}
        >
          保存
        </Button>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.slideshow,
  }),
  dispatchToProps
)(SlideshowList);
