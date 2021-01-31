import React from "react";
import { Card, Button } from "antd";
import { connect, dispatchToProps } from "@/utils";
import Pagination from "@/components/pagination";
import { Option } from "@/common";
import { SelectList } from "@/components";

class Index extends React.Component {
  state = {
    request: {
      method: 1,
      apply_checked: 1,
      ...this.props.common.global.initPage,
    },
  };

  option = this.props.common.global.option;

  componentDidMount() {
    // this.props.common.global.option[0].list.push(...React.$enums.linkType);
    this.props.common.global.option[0].list.push(
      {
        value: "0",
        name: "百度redux",
      },
      {
        value: "1",
        name: "阿里",
      }
    );
    this.getData();
  }

  getData = (data) => {
    this.props.dispatch.select({
      api: "systemMessage",
      data: {
        coding: "12345",
        ...this.state.request,
        ...data,
      },
    });
  };

  select = (res) => {
    let params = {};
    this.props.common.global.request.page = "0";
    this.props.common.global.request.pagesize = "15";
    if (res.type === "add") {
      params = Object.assign(this.props.common.global.request, res.data);
    } else {
      for (let key in this.props.common.global.request) {
        //遍历json对象的每个key/value对,p为key

        if (res.field.includes(key)) {
          delete this.props.common.global.request[key];
        }
      }

      params = this.props.common.global.request;
    }

    this.props.dispatch.searchField({
      field: { ...params },
    });
    this.getData();
  };

  buton = (data) => {
    this.props.dispatch.searchField({
      data: {
        ...this.props.common.global.initPage,
      },
      node: "request",
    });
    this.props.dispatch.searchField({
      data: true,
      node: "clear",
    });
    this.setState(
      {
        request: Object.assign(this.state.request, data),
      },
      () => {
        this.getData();
      }
    );
  };

  render() {
    return (
      <Card>
        <Pagination
          defaultCurrent={1}
          renderList={this.getData}
          {...this.props}
        />
        <div>
          <Option
            option={this.option}
            data={{ coding: "123123" }}
            renderList={this.getData}
            search={{
              show: true,
            }}
            {...this.props}
          />

          <SelectList
            enumSource={{
              checked: {
                "": "所有",
                0: "关闭",
                1: "开启",
              },
            }}
            init={[
              {
                title: "状态",
                field: "checked",
                value: "",
                name: "所有",
              },
            ]}
            renderList={this.getData}
            {...this.props}
          />
          <Button
            onClick={() =>
              this.buton({
                method: 10,
                apply_checked: 1,
              })
            }
          >
            按钮点击
          </Button>
          <Button
            onClick={() =>
              this.buton({
                method: 20,
                apply_checked: 1,
              })
            }
          >
            二次按钮点击
          </Button>
        </div>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.link,
    common: state.common,
  }),
  dispatchToProps
)(Index);
