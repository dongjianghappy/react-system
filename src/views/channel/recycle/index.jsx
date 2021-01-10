import React from "react";
import { Card, Space } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  datetime,
} from "@/utils";
import { Confirm, WeCheckbox } from "@/components";

const mod = window.location.pathname.split("/")[2] || "";
const { add, del, edit } = authorized.announcement;
const { art: coding } = codings[mod];

class Recycle extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      api: "articleList",
      data: {
        recycle: "true",
        page: 0,
        pagesize: 10,
        coding,
      },
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const {
      module: { list },
    } = this.props;

    return (
      <div>
        <Card title="回收站">
          <table
            width="100%"
            className="table-striped table-hover artlist col-left-23"
          >
            <tr class="th">
              <td className="col-md-1">选择</td>
              <td className="col-md-3">文档名称</td>
              <td className="col-md-2">分类</td>
              <td className="col-md-2">发布时间</td>
              <td className="col-md-2">删除时间</td>
              <td className="col-md-2">操作</td>
            </tr>
            {list &&
              list.map((item, index) => (
                <tr class="tr-list">
                  <td>
                    <WeCheckbox
                      data={{ id: item.id }}
                      {...this.props}
                    ></WeCheckbox>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.parent}</td>
                  <td>{datetime(item.datetime)}</td>
                  <td>{datetime(item.datetime)}</td>
                  <td>
                    <Space size="middle">
                      <Confirm
                        name="还原"
                        config={{
                          operating: "restore",
                          message: React.$modalEnum,
                        }}
                        data={{ coding, id: item.id }}
                        api="removeAndRestore"
                        renderList={this.getData}
                        authorized={checkButtonAuth("delete")}
                        {...this.props}
                      />
                      <Confirm
                        name="清除"
                        config={{
                          operating: "delete",
                          message: React.$modalEnum,
                        }}
                        data={{ coding, id: item.id }}
                        api="deleteArticle"
                        renderList={this.getData}
                        authorized={checkButtonAuth("delete")}
                        {...this.props}
                      />
                    </Space>
                  </td>
                </tr>
              ))}
          </table>
        </Card>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.channel,
  }),
  dispatchToProps
)(Recycle);
