import React from "react";
import { Card, Button } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  getQuery,
} from "@/utils";
import { NavGroup } from "@/components";
import List from "./components/list";
import CheckedList from "./components/list_audit";
import ReturnList from "./components/list_return";

const { Nav } = NavGroup;

const mod = window.location.pathname.split("/")[2] || "";

const { add } = (authorized.channel[mod] && authorized.channel[mod].art) || {
  add: "",
};

class Index extends React.Component {
  state = {
    params: {},
    coding: {},
  };

  getData = (params = {}) => {
    this.state.params.fid && (params.fid = `|${this.state.params.fid}|`);

    this.props.dispatch.select({
      api: "articleList",
      data: {
        coding: this.state.coding.art,
        page: 0,
        pagesize: 15,
        ...params,
      },
    });
  };

  componentDidMount() {
    const mod = window.location.pathname.split("/")[2] || "";

    this.setState(
      {
        params: getQuery(),
        coding: codings[mod],
      },
      () => {
        this.getData({
          management_checked: 1,
        });
        this.props.dispatch.getFlagAction();
      }
    );
  }

  callback = (key) => {
    let param = {};
    switch (key) {
      case "2":
        param = {
          management_checked: 0,
        };
        break;
      case "3":
        param = {
          management_checked: -1,
        };
        break;
      default:
        param = {
          management_checked: 1,
        };
        break;
    }

    this.getData(param);
  };

  render() {
    const { module } = this.props;

    return (
      <div>
        <NavGroup
          onChange={this.callback}
          extra={
            checkButtonAuth(add) && (
              <Button
                type="primary"
                onClick={() =>
                  this.props.history.push(`/admin/${mod}/detail?channel=3}`)
                }
                authorized={checkButtonAuth(add)}
              >
                新增文档
              </Button>
            )
          }
        >
          <Nav name="文档管理" value="1">
            <List
              type="1"
              dataSource={module}
              renderList={this.getData}
              {...this.props}
            />
          </Nav>
          <Nav name="正在审核" value="2">
            <Card>
              <CheckedList
                type="1"
                data={module.list}
                renderList={this.getData}
                {...this.props}
              />
            </Card>
          </Nav>
          <Nav name="已退回" value="3">
            <Card>
              <ReturnList
                type="1"
                data={module.list}
                renderList={this.getData}
                {...this.props}
              />
            </Card>
          </Nav>
        </NavGroup>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.channel,
  }),
  dispatchToProps
)(Index);
