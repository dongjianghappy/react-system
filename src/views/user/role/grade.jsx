import React from "react";
import { Card, Tree, Row, Col, Button, message } from "antd";
import {
  connect,
  Link,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

const { edit } = authorized.user.roleGrade;
const { role: coding } = codings.user;

class RoleGrade extends React.Component {
  state = {
    authorityPage: [],
    authorityButton: [],
    checkedKeys: [],
  };

  onCheck = (checkedKeys, info) => {
    this.setState({
      checkedKeys,
    });
  };

  async componentDidMount() {
    const data = await this.props.dispatch.fetch({
      api: "detail",
      data: {
        id: this.props.location.state.id,
        coding,
      },
    });

    this.setState({
      checkedKeys: data.result.grade.split(","),
    });

    const pageRes = await this.props.dispatch.fetch({
      api: "rolegrade",
      data: {
        type: 0,
        page: 0,
        pagesize: 100,
      },
    });

    const buttonRes = await this.props.dispatch.fetch({
      api: "rolegrade",
      data: {
        type: 1,
        page: 0,
        pagesize: 100,
      },
    });

    if (pageRes.result.list !== null && buttonRes.result.list !== null) {
      this.setState({
        authorityPage: pageRes.result.list,
        authorityButton: buttonRes.result.list,
      });
    }
  }

  submit = () => {
    this.props.dispatch
      .update({
        data: {
          m: "vue",
          coding,
          id: this.props.location.state.id,
          grade: this.state.checkedKeys.join(),
        },
      })
      .then((res) => {
        message.info("保存成功");
      });
  };

  loop = (data, type, nodeKey = "") => {
    return data.map((item) => {
      const title =
        item.type === "0" ? (
          <div>
            {item.title}
            <span
              style={{
                background: "#a8cfef",
                color: "#fff",
                fontSize: "12px",
                padding: "2px 5px",
                borderRadius: "3px",
                marginLeft: 10,
                border: "1px solid #40a9ff",
              }}
            >
              页面
            </span>
          </div>
        ) : (
          <div>
            {item.title}
            <span
              style={{
                background: "#b6db94",
                color: "#fff",
                fontSize: "12px",
                padding: "2px 5px",
                borderRadius: "3px",
                marginLeft: 10,
                border: "1px solid #24d12d",
              }}
            >
              按钮
            </span>
          </div>
        );

      let isAbled = true;
      let checkable = true;
      if (type === 2) {
        if (item.type === "0") {
          isAbled =
            this.state.checkedKeys.indexOf(item.key || nodeKey) > -1
              ? false
              : isAbled;
          checkable = false;
        } else {
          isAbled =
            this.state.checkedKeys.indexOf(nodeKey) > -1 ? false : isAbled;
          isAbled =
            this.state.checkedKeys.indexOf(nodeKey) > -1 ? false : isAbled;
        }
      }

      if (item.children) {
        return {
          checkable: checkable,
          disabled: type === 1 ? false : isAbled,
          title,
          key: item.key,
          children: this.loop(item.children, type, item.key),
        };
      }

      return {
        checkable: checkable,
        disabled: type === 1 ? false : isAbled,
        title,
        key: item.key,
      };
    });
  };

  render() {
    return (
      <>
        <Row>
          <Col span="12">
            <Card title="页面权限设置" style={{ marginRight: 10 }}>
              {this.state.authorityPage.length > 0 ? (
                <Tree
                  checkedKeys={this.state.checkedKeys}
                  checkable
                  defaultExpandAll={true}
                  defaultExpandedKeys={this.state.checkedKeys}
                  defaultSelectedKeys={this.state.checkedKeys}
                  defaultCheckedKeys={this.state.checkedKeys}
                  onSelect={this.onSelect}
                  onCheck={this.onCheck}
                  treeData={this.loop(this.state.authorityPage, 1)}
                  disabled={false}
                  treeType="1"
                />
              ) : (
                ""
              )}
            </Card>
          </Col>
          <Col span="12">
            <Card title="按钮权限设置">
              {this.state.authorityPage.length > 0 ? (
                <Tree
                  checkedKeys={this.state.checkedKeys}
                  checkable
                  defaultExpandAll={true}
                  defaultExpandedKeys={this.state.checkedKeys}
                  defaultSelectedKeys={this.state.checkedKeys}
                  defaultCheckedKeys={this.state.checkedKeys}
                  onSelect={this.onSelect}
                  onCheck={this.onCheck}
                  treeData={this.loop(this.state.authorityButton, 2)}
                  treeType="2"
                />
              ) : (
                ""
              )}
            </Card>
          </Col>
        </Row>

        <div
          className="absolute p10"
          style={{
            background: "#fff",
            display: "flex",
            justifyContent: "flex-end",
            left: 200,
            right: 0,
            bottom: 0,
            width: "auto",
          }}
        >
          <Button type="primary" onClick={() => this.submit()}>
            保存
          </Button>
        </div>
      </>
    );
  }
}

export default connect(
  (state) => ({
    module: state.user,
  }),
  dispatchToProps
)(RoleGrade);
