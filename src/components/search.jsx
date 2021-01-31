import React from "react";
import { Form, Button, Input } from "antd";

const Search = (props) => {
  const {
    common: {
      global: { initPage },
    },
    renderList,
    dispatch,
  } = props;

  const onFinish = (values) => {
    const newsRequest = { ...initPage };
    newsRequest.title = values.title;

    dispatch.searchField({
      data: {
        ...newsRequest,
      },
      node: "request",
    });

    dispatch.searchField({
      data: true,
      node: "clear",
    });

    renderList && renderList(newsRequest);
  };

  return (
    <>
      <Form layout="inline" onFinish={onFinish} style={{ float: "right" }}>
        {props.render ? (
          props.render()
        ) : (
          <Form.Item name="title">
            <Input
              placeholder="关键词查找"
              className="input-250 input-sm mr10"
              prefix="sd"
            />
          </Form.Item>
        )}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="mr5">
            查询
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Search;
