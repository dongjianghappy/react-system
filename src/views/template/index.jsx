import React from "react";
import { Card, Row, Col, Popover } from "antd";
import { connect, dispatchToProps, getQuery } from "@/utils";
import folder from "@/static/image/file.jpg";
import html from "@/static/image/ie.png";
import css from "@/static/image/css_file.png";
import js from "@/static/image/js.jpg";
import EditFile from "./components/editFile";

class Index extends React.Component {
  state = {
    module: { name: "公共", value: "0" },
    data: [],
    detail: "",
    isEdit: false,
  };

  componentDidMount() {
    if (JSON.stringify(getQuery()) === "{}") {
      this.props.history.push(`/admin/template?channel=0`);
    } else {
      const { channel, file } = getQuery();
      this.setState({
        module: {
          name: this.sorter[channel],
          value: channel,
        },
        isEdit: file !== undefined ? true : false,
      });

      this.getData({
        dir: this.props.location.search.split("?")[1],
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.getData({
      dir: nextProps.location.search.split("?")[1],
    });
  }

  // 初始化方法
  getData = (params) => {
    this.props.dispatch
      .fetch({
        api: "template",
        data: { ...params },
      })
      .then((res) => {
        if (res.result.list) {
          this.setState({
            data: res.result.list,
          });
        } else {
          this.setState({
            detail: res.result,
          });
        }
      });
  };

  // 打开目录或打开文件
  handel = (item) => {
    let prevArr = this.props.location.search.split("&");
    this.props.history.push(`/admin/template${prevArr[0]}${item.file}`);
    if (item.type !== "folder") {
      this.setState({ isEdit: true });
    }
  };

  // 返回上级目录;
  handelReturn = (data) => {
    let prevArr = this.props.location.search.split("&");
    if (prevArr.length === 1) {
      return;
    }
    prevArr.splice(prevArr.length - 1, 1); // 删除最后一个元素
    if (prevArr.length > 1) {
      let prevUrl = `folder=${prevArr[prevArr.length - 1].split("=")[1]}`;
      prevArr.splice(prevArr.length - 1, 1);
      prevArr.push(prevUrl);
    }
    this.setState({ isEdit: false });
    this.props.history.push(prevArr.join("&"));
  };

  // 当前目录
  currentPath = () => {
    let arr = this.props.location.search.split("&");
    let path = "root";
    if (arr.length > 1) {
      for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
          path = `${path} > <span>${arr[i].split("=")[1]}<span>`;
        }
      }
    }
    return path;
  };

  sorter = {
    0: "公共",
    1: "资源",
    2: "资讯",
    3: "科技",
    4: "图片",
  };

  sort = (key) => {
    this.setState({
      module: {
        name: this.sorter[key],
        value: key,
      },
      isEdit: false,
    });
    this.props.history.push(`/admin/template?channel=${key}`);
  };

  render() {
    const newArr = this.state.data.filter(
      (item) =>
        item.type === "folder" ||
        item.type === "htm" ||
        item.type === "css" ||
        item.type === "js"
    );

    return (
      <Card>
        <Row
          className="mb25 pb10"
          style={{ borderBottom: "1px solid #f0f0f0" }}
        >
          <Col span={2}>
            <Popover
              placement="bottom"
              trigger="click"
              content={
                <div>
                  {Object.keys(this.sorter).map((key) => (
                    <p onClick={() => this.sort(key)}>{this.sorter[key]}</p>
                  ))}
                </div>
              }
            >
              <span className="pl5">
                {this.sorter[this.state.module.value]}模板
              </span>
            </Popover>
          </Col>
          <Col span={14}>
            <Row>
              <Col span={20}>
                当前目录：
                <span
                  dangerouslySetInnerHTML={{
                    __html: this.currentPath(),
                  }}
                ></span>
              </Col>
            </Row>
          </Col>
          <Col span={8} className="align_right">
            {!this.state.isEdit && (
              <span className="mr10">共有{newArr.length}个文件</span>
            )}
            <span onClick={() => this.handelReturn()}>返回上级目录</span>
          </Col>
        </Row>
        {this.state.isEdit ? (
          <EditFile dataSource={this.state.detail} {...this.props} />
        ) : (
          <Row>
            {newArr &&
              newArr.map((item, i) => (
                <Col span={this.props.span} style={{ padding: 5 }}>
                  <Card className="space-wrap relative align_center">
                    <div className="space-file">
                      <div>
                        <img
                          src={
                            (item.type === "folder" && folder) ||
                            (item.type === "htm" && html) ||
                            (item.type === "css" && css) ||
                            (item.type === "js" && js)
                          }
                          width="40"
                          onClick={() => this.handel(item)}
                        />
                      </div>
                      <div className="nowrap">{item.name}</div>
                    </div>
                  </Card>
                </Col>
              ))}
          </Row>
        )}
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.template,
  }),
  dispatchToProps
)(Index);
