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
    dataSource: [],
    current: "", // 当保存成功后状态消失，其实在页面顺序更新后，在列表右侧可以新增一个刷新的按钮
    form: {},
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
          dataSource: res.result,
          form: arr,
        });
      });
  };

  handleInput(e, data) {
    this.state.dataSource.map((item) => {
      if (item.id === data.id) {
        item[data.field] = e.target.value;
      }
    });

    this.setState({
      form: this.state.dataSource,
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

  // 移动
  onMove = (direction, obj, moveItem, index) => {
    const newData = obj;
    const item = newData.splice(
      index + (direction === "up" ? -1 : index === obj.length - 1 ? -index : 1),
      1,
      moveItem
    )[0];
    newData[index] = item;
    this.setState({
      dataSource: this.state.dataSource,
    });
  };

  // 保存
  save = () => {
    const form = [];
    const loop = (data) => {
      return this.state.dataSource.map((item, index) => {
        item.sort = 1 + index;
        form.push({
          id: item.id,
          sort: item.sort,
          title: item.title,
          url: item.url,
          image: item.image,
        });
        if (item.list) {
          loop(item.list);
        }
      });
    };

    loop(this.props.module.main);

    this.props.dispatch
      .fetch({
        api: "updateSave",
        data: {
          coding: coding,
          data: JSON.stringify(form),
        },
      })
      .then((res) => {
        message.info("编辑成功");
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
        {this.state.dataSource.map((item, index) => (
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
                  key={item.image}
                  addonBefore="图片地址"
                  style={{ width: 450 }}
                  defaultValue={item.image}
                  onChange={(e) =>
                    this.handleInput(e, { id: item.id, field: "image" })
                  }
                />
              </div>
              <div style={{ marginTop: 5 }}>
                <Input
                  key={item.url}
                  addonBefore="连接地址"
                  style={{ width: 450 }}
                  defaultValue={item.url}
                  onChange={(e) =>
                    this.handleInput(e, { id: item.id, field: "url" })
                  }
                />
              </div>
              <div style={{ marginTop: 5 }}>
                <Input
                  key={item.title}
                  addonBefore="文字说明"
                  style={{ width: 450 }}
                  defaultValue={item.title}
                  onChange={(e) =>
                    this.handleInput(e, { id: item.id, field: "title" })
                  }
                />
              </div>
            </Col>
            <Col
              span={4}
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
              span={2}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() =>
                  this.onMove("up", this.state.dataSource, item, index)
                }
                className="deg180"
                className="deg180 move-button"
              >
                <i className="iconfont icon-arrow1 moving"></i>
              </Button>
              <Button
                onClick={() =>
                  this.onMove("down", this.state.dataSource, item, index)
                }
                className="move-button"
              >
                <i className="iconfont icon-arrow1"></i>
              </Button>
            </Col>
          </Row>
        ))}
        <Button
          type="primary"
          size="large"
          onClick={() => this.save()}
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
