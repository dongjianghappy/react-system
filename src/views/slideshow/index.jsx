import React from "react";
import { Card, Row, Col } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import { WeDrawer } from "@/components";
import Detail from "./components/detail";

const { add, edit } = authorized.slideshow.cate;
const { cate: coding } = codings.slideshow;

class Index extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.select({
      api: "slideshow",
    });
  };

  render() {
    const { list } = this.props.module;

    return (
      <Card
        title="幻灯片管理"
        extra={
          checkButtonAuth(add) && (
            <WeDrawer.Form
              name="新增幻灯片"
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
        <Row>
          {list &&
            list.map((item, i) => (
              <Col span={6}>
                <Card
                  style={{ margin: 10, padding: 10 }}
                  cover={
                    <span
                      onClick={() =>
                        this.props.history.push(
                          `/admin/slideshow/list?fid=${item.id}`
                        )
                      }
                    >
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    </span>
                  }
                >
                  {item.name}
                  <WeDrawer.Form
                    name="编辑"
                    isText={true}
                    action="edit"
                    data={{ id: item.id, coding }}
                    renderList={this.getData}
                    authorized={checkButtonAuth(edit)}
                    {...this.props}
                  >
                    <Detail />
                  </WeDrawer.Form>
                </Card>
              </Col>
            ))}
        </Row>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.slideshow,
  }),
  dispatchToProps
)(Index);
