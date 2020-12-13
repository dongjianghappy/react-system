import React, { useState, useEffect, useRef } from "react";
import { Tag, Input, Checkbox } from "antd";

import R_button from "../components/button";

const Keyword = (props) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [keyword, setIKeyword] = useState(["1", "2", "3", "4", "5"]);
  const keywordInput = useRef();

  useEffect(() => {
    debugger;
    setIKeyword([...props.tag]);
  }, []);

  const sss = (index) => {
    debugger;
    props.tag.splice(index, 1);
    // setIKeyword([...keyword])
    props.change(props.tag);
  };

  const handelBlur = () => {
    const value = keywordInput.current.state.value;
    debugger;
    if (value !== "" && value !== undefined && !props.tag.includes(value)) {
      props.tag.push(keywordInput.current.state.value);
      // setIKeyword([...keyword])
      props.change(props.tag);
    }
  };

  return (
    <div className="p10" style={{ background: "#fff" }}>
      <div
        id="tagInputContainer"
        className="tagInputContainer"
        style={{ background: "none", position: "relative" }}
      >
        {props.tag &&
          props.tag.map((item, index) => (
            <div class="tag-box">
              <span>{item}</span>
              <a onClick={() => sss(index)} title="删除">
                ×
              </a>
            </div>
          ))}

        <Input
          ref={keywordInput}
          placeholder="请输入关键词"
          className="input-150"
          onBlur={handelBlur}
          style={{ border: 0 }}
        />
        <div style={{ position: "absolute", top: "0px", right: "10px" }}>
          <Checkbox /> 开启检索功能
        </div>
      </div>
      <div id="tagListContainer" className="tagListContainer">
        <div id="match_tag"></div>
        <div className="tagList">
          <span>核心：</span>

          <div className="tag-box tagBox">ewqe</div>
        </div>
        <div className="tagList">
          <span>目标：</span>

          <div className="tag-box tagBox">sd</div>
        </div>
      </div>
    </div>
  );
};

export default Keyword;
