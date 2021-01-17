import React from "react";
import { Card } from "antd";
import { connect, dispatchToProps, codings } from "@/utils";

class New extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 100,
        coding: "P0007",
      },
      node: "news",
    });
  };

  render() {
    const { news } = this.props.module;
    return (
      <>
        <Card title="新订单">
          <table width="100%" className="table-striped table-hover col-left-23">
            <tr class="th">
              <td class="col-md-1">选择</td>
              <td class="col-md-2">订单号</td>
              <td class="col-md-4">订单名称</td>
              <td class="col-md-1">类型</td>
              <td class="col-md-2">价格(元/周期)</td>
              <td class="col-md-1">下单日期</td>
              <td class="col-md-1">操作</td>
            </tr>
            {news &&
              news.map((item, index) => (
                <tr>
                  <td></td>
                  <td>{item.number}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.cycle}</td>
                  <td>{item.start_time}</td>
                  <td>处理订单</td>
                </tr>
              ))}
          </table>
        </Card>
      </>
    );
  }
}

export default connect(
  (state) => ({
    module: state.order,
  }),
  dispatchToProps
)(New);
