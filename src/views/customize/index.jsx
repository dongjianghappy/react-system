import React from "react";
import { Card } from "antd";
import { connect, dispatchToProps, checkButtonAuth, authorized } from "@/utils";

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
                    <span
                      onClick={() =>
                        this.props.history.push(
                          `/admin/customize/list?id=${item.id}`
                        )
                      }
                    >
                      字段管理
                    </span>
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