import React from "react";
import { Card, Row, Col } from "antd";
import { connect, dispatchToProps } from "@/utils";
import { WeModal } from "@/components";
import Operating from "./operating";
import Position from "./position";

class Main extends React.Component {
  state = {
    visible: false,
    data: [],
    prev: "",
    dir: "../upload/",
    currentDir: "",
    file: "",
    checkedList: [],
    image: "",
  };

  getData = (type, data, filesss) => {
    let file = "";
    let dir = "";

    switch (type) {
      // 返回
      case "return":
        dir = this.state.dir.split("/");
        file = data ? `${data}` : "";
        dir.splice(dir.length - 2, 2);
        this.setState({
          dir: `${dir.join("/")}/`,
        });
        break;

      // 打开目录
      case "open":
        file = data ? `&${data}` : "";
        dir = `${this.state.dir}${filesss}/`;
        this.setState({
          dir,
          file: filesss,
        });
        break;
      // 初始化
      default:
        file = data || "";
    }

    this.setState({
      currentDir: file,
    });
    this.props.dispatch
      .fetch({
        api: "space",
        data: {
          file,
        },
      })
      .then((res) => {
        this.setState({
          data: res.result.fileList,
          prev: res.result.prev_dir,
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  choose = (data) => {
    // let index = this.state.checkedList.indexOf(data);
    // if (index !== -1) {
    //   this.state.checkedList.splice(index, 1);
    // } else {
    //   this.state.checkedList.push(data);
    // }

    // this.setState({
    //   checkedList: this.state.checkedList,
    // });

    this.setState({
      image: data,
    });
    this.props.getData(data);
  };

  render() {
    return (
      <>
        <Position
          dir={this.state.dir}
          goback={() => this.getData("return", this.state.prev)}
          renderList={() => this.getData("init", this.state.currentDir)}
          {...this.props}
        />
        <div
          style={{
            position: "absolute",
            top: 50,
            bottom: "0",
            overflow: "hidden",
            overflowY: "auto",
          }}
        >
          <Row>
            {this.state.data &&
              this.state.data.map((item, i) => (
                <Col span={this.props.span} style={{ padding: 5 }}>
                  <Card
                    className={`space-wrap relative align_center ${
                      this.state.image === item.path ? "current" : ""
                    }`}
                  >
                    <div
                      className={`space-${
                        item.type === "文件夹" ? "file" : "picture"
                      }`}
                    >
                      {item.type === "文件夹" ? (
                        <>
                          <div>
                            <img
                              src={item.path}
                              width="40"
                              onClick={() =>
                                this.getData("open", item.file, item.name)
                              }
                            />
                          </div>
                          <div className="nowrap">{item.name}</div>
                        </>
                      ) : (
                        <>
                          {this.props.show === "space" ? (
                            <WeModal.Picture src={item.img_url}>
                              <img src={item.img_url} />
                            </WeModal.Picture>
                          ) : (
                            <div onClick={() => this.choose(item.path)}>
                              <img src={item.img_url} />
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    {this.props.show === "space" && item.type !== "文件夹" ? (
                      <Operating
                        item={item}
                        renderList={() =>
                          this.getData("init", this.state.currentDir)
                        }
                        {...this.props}
                      />
                    ) : (
                      ""
                    )}
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      </>
    );
  }
}

export default connect(
  (state) => ({
    module: state.space,
  }),
  dispatchToProps
)(Main);
