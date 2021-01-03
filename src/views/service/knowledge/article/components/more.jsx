import React from "react";
import { message } from "antd";

const OrderInfo = (props) => {
  const { Link, dispatch, dataSource, data } = props;

  return (
    <>
      <h3>{dataSource.name}</h3>
      <div style={{ background: "#fafafa", padding: 16, width: 500 }}>
        <p>编号：{dataSource.id}</p>
        <p>标签: {dataSource.tag}</p>
        <p>作者: {dataSource.writer}</p>
        <p>来源: {dataSource.source}</p>
        <p>更新时间: {dataSource.datetime}</p>
        <p>
          <span className="mr10">在线预览</span>
          <span className="mr10">更新静态</span>
          <span className="mr10">评论({dataSource.comment})</span>
          <span className="mr10">点赞({dataSource.comment})</span>
          <span className="mr10">收藏({dataSource.comment})</span>
          <span>下载({dataSource.download})</span>
        </p>
      </div>
    </>
  );
};

export default OrderInfo;
