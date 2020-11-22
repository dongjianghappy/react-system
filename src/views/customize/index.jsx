import React from "react";
import { Card } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { Link } from "react-router-dom";

class Customize extends React.Component {
  componentDidMount() {
    this.props.dispatch.select({
      api: "anpassen",
      node: "modelList",
    });
  }

  render() {
    const { modelList } = this.props.module;
    return (
      <div>
        <Card title="内容模型管理">
          <table width="100%" class="table-striped artlist col-left-1">
            <tr class="th">
              <td class="col-md-3">频道名称</td>
              <td class="col-md-1">频道ID</td>
              <td class="col-md-1">识别id</td>
              <td class="col-md-2">附加表</td>
              <td class="col-md-1">状态</td>
              <td class="col-md-2">模型</td>
              <td class="col-md-2">操作</td>
            </tr>
            {modelList &&
              modelList.map((item, index) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.id}</td>
                  <td>{item.module}</td>
                  <td>{item.source}</td>
                  <td>{item.type}</td>
                  <td>{item.type}</td>
                  <td>
                    <Link
                      to={{
                        pathname: "/admin/customize/list",
                        state: { id: item.id },
                      }}
                    >
                      字段管理
                    </Link>
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
    module: state.customize,
  }),
  dispatchToProps
)(Customize);
