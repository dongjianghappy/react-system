import React, { useState, useRef } from "react";
import { Button } from "antd";

const Quick = (props) => {
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("asc");

  const Ref = useRef();

  const hand = () => {
    props.renderList({
      sorter: `${props.field}|${sort}`,
    });
    if (sort === "asc") {
      setSort("desc");
    } else {
      setSort("asc");
    }
  };

  return (
    <>
      <div className="sort" onClick={() => hand()}>
        <span>{props.title}</span>
        <span className="relative" style={{ width: "12px" }}>
          <span
            className="absolute"
            style={{
              display: "block",
              top: "-16px",
              transform: "rotate(180deg)",
            }}
          >
            <i className="iconfont icon-triangle" />
          </span>
          <span className="absolute" style={{ display: "block", top: "-6px" }}>
            <i className="iconfont icon-triangle" />
          </span>
        </span>
      </div>
    </>
  );
};

export default Quick;
