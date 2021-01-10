import React, { useState } from "react";
import { message } from "antd";
import { CheckboxGroup } from "@/common";

const OrderInfo = (props) => {
  const { dispatch, dataSource, data, renderList } = props;
  const [params, setParams] = useState({});

  const callback = (params) => {
    setParams({ ...params });
  };

  const onUpdate = () => {
    dispatch
      .fetch({
        api: "updateArticle",
        data: {
          ...data,
          ...params,
        },
      })
      .then((res) => {
        message.info("编辑成功");
        renderList();
      });
  };

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
          <span
            className="mr10"
            onClick={() =>
              props.history.push(`/admin/article/comment?fid=${dataSource.id}`)
            }
          >
            评论({dataSource.comment})
          </span>
          <span
            className="mr10"
            onClick={() =>
              props.history.push(`/admin/article/praise?fid=${dataSource.id}`)
            }
          >
            点赞({dataSource.praise})
          </span>
          <span
            className="mr10"
            onClick={() =>
              props.history.push(`/admin/article/collect?fid=${dataSource.id}`)
            }
          >
            收藏({dataSource.collect})
          </span>
          <span
            onClick={() =>
              props.history.push(`/admin/article/download?fid=${dataSource.id}`)
            }
          >
            下载({dataSource.download})
          </span>
        </p>
        <p>
          属性:<span onClick={onUpdate}>更新</span>
          <CheckboxGroup
            dataSource={dataSource}
            flagList={props.flags}
            callback={callback}
          />
        </p>
      </div>
    </>
  );
};

export default OrderInfo;
