import React, { useState, useEffect, useRef } from "react";
import { Input, Checkbox } from "antd";

import "./tem.less";
import { PlusOutlined } from "@ant-design/icons";

const Keyword = (props) => {
  const { value, callback, dispatch } = props;
  const [isSearch, setIsSearch] = useState(false); // 是否检索
  const [keyword, setIKeyword] = useState([]); // 标签数据
  const [list, setList] = useState([]); // 标签数据
  const keywordInput = useRef();

  useEffect(() => {
    if (value !== undefined && value !== "") {
      setIKeyword([...value.split(",")]);
    }

    document.onclick = hideSearchInfo;
  }, [props.value]); // 这里数组中是箭头父组件tag属性变化

  // 删除标签
  const remove = (index) => {
    keyword.splice(index, 1);
    setIKeyword([...keyword]);
    if (props.field === "tag") {
      props.callback({ tag: keyword.join(",") });
    } else {
      props.callback({ keyword: keyword.join(",") });
    }
  };

  // 失去焦点追加标签
  const handelBlur = () => {
    const value = keywordInput.current.state.value;
    const val = value && value.replace(/\s+/g, "");

    if (!isSearch) {
      if (val && !keyword.includes(val)) {
        keyword.push(val);
        setIKeyword([...keyword]);
        if (props.field === "tag") {
          props.callback({ tag: keyword.join(",") });
        } else {
          props.callback({ keyword: keyword.join(",") });
        }
      }
    } else {
      const value = keywordInput.current.state.value;
      const val = value && value.replace(/\s+/g, "");
      // 这里调用接口
      dispatch
        .fetch({
          api: "getTag",
          data: {
            tag: val,
          },
        })
        .then((res) => {
          setList(res.result);
        });
    }
  };

  // 勾选是否检索
  const onChange = (e) => {
    setIsSearch(e.target.checked);
  };

  // 选择标签
  const select = (e) => {
    if (!keyword.includes(e.target.innerText)) {
      keyword.push(e.target.innerText);
      setIKeyword([...keyword]);
      if (props.field === "tag") {
        props.callback({ tag: keyword.join(",") });
      } else {
        props.callback({ keyword: keyword.join(",") });
      }
    }
  };

  const hideSearchInfo = (e) => {
    e.stopPropagation(); //阻止事件冒泡
    const aaa = e.target.classList[0];
    if (aaa !== "tagInputContainer") {
    }
  };

  return (
    <div className="p10">
      <div className="tagInputContainer" style={{ position: "relative" }}>
        {keyword.map((item, index) => (
          <div className="tag-box">
            <span>{item}</span>
            <a onClick={() => remove(index)} className="remove">
              ×
            </a>
          </div>
        ))}
        <Input
          ref={keywordInput}
          prefix={<PlusOutlined style={{ color: "#ccc" }} />}
          placeholder="请输入关键词"
          allowClear
          onBlur={handelBlur}
          style={{ border: 0, width: 150 }}
        />
        <div style={{ position: "absolute", top: "12px", right: "12px" }}>
          <Checkbox onChange={onChange}>开启检索功能</Checkbox>
        </div>
      </div>
      {isSearch ? (
        <div className="tagListContainer">
          <div className="tagList">
            {list.map((item, index) => (
              <div onClick={select} className="tag-box tagBox">
                {item.name}
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Keyword;
