import React, { useState } from "react";
import { Form, Button, Input } from "antd";

const Search = (props) => {
  const {
    common: {
      global: { initPage },
    },
    renderList,
    dispatch,
  } = props;

  const [content, setContent] = useState("");

  const inputChange = (e) => {
    setContent(e.target.value);
  };

  const onFinish = () => {
    const newsRequest = { ...initPage };
    newsRequest[props.search.field] = content;

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
      <div className="relative" style={{ paddingRight: 0 }}>
        <Input
          placeholder="关键词查找"
          onChange={inputChange}
          className="input-250 input-sm"
        />
        <span
          className="absolute block"
          onClick={onFinish}
          style={{
            background: "#f0f0f0",
            top: 0,
            right: 0,
            padding: "5px 8px",
            height: 30,
            border: 0,
          }}
        >
          查询
        </span>
      </div>
    </>
  );
};

export default Search;
