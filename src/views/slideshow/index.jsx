import React from "react";
import { Card, Row, Col } from "antd";
import {
  connect,
  Link,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import Detail from "./components/detail";
import { WeDrawer, NavGroup } from "@/components";

const { Nav } = NavGroup;
const { add, edit } = authorized.slideshow.cate;
const { cate: coding } = codings.slideshow;

class Slideshow extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      api: "slideshow",
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { list } = this.props.module;

    return (
      <NavGroup
        extra={
          checkButtonAuth(add) ? (
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
          ) : (
            ""
          )
        }
      >
        <Nav name="幻灯片管理" value="1">
          <Card>
            <Row>
              {list &&
                list.map((item, i) => (
                  <Col span={6}>
                    <Card
                      style={{ margin: 10, padding: 10 }}
                      cover={
                        <Link
                          to={{
                            pathname: "/admin/slideshow/list",
                            state: { fid: item.id },
                          }}
                        >
                          <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                          />
                        </Link>
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
        </Nav>
      </NavGroup>
    );
  }
}

const stateToProops = (state) => {
  return {
    module: state.slideshow,
  };
};

export default connect(stateToProops, dispatchToProps)(Slideshow);
