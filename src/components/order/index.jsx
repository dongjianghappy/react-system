import React from "react";
import { message } from "antd";

const OrderInfo = (props) => {
  const { Link, dispatch, dataSource, data } = props;

  const handel = () => {
    dispatch
      .fetch({
        api: props.api,
        data: {
          ...props.data,
        },
      })
      .then(() => {
        message.info("生成订单成功");
      });
  };
  return (
    <>
      <div style={{ background: "#fafafa", padding: 16, width: 500 }}>
        <p>
          操作： <span onClick={handel}>开始生成</span>
        </p>
        <p>时间：2020-12-12</p>
        <p>次数：2</p>
        <p style={{ marginBottom: 0 }}>
          查看：<Link to="/admin/order/doing">点击查看</Link>
        </p>
      </div>
    </>
  );
};

export default OrderInfo;
