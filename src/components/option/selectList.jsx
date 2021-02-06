import React, { useState, useEffect } from "react";
import { Row, Col, Popover } from "antd";
import SelectOption from "./select";
import { jsonLength } from "@/utils";
import { Search } from "../index";

const Option = (props) => {
  const {
    common: {
      global: { request, initPage, clear },
    },
    dispatch,
    renderList,
    init,
    enumSource,
    hasReset,
  } = props; // 初始化数据
  const [dataList, setDataList] = useState(init); // 当前数据

  useEffect(() => {
    if (clear) {
      setDataList(init);
      dispatch.searchField({
        data: false,
        node: "clear",
      });
    }
  }, [request]);

  // 选择
  const callback = (param) => {
    const newsRequest = { ...request, ...initPage };

    let obj = {};
    dataList.map((item) => {
      if (item.field === param.field) {
        item.name = param.name;
        item.value = param.value;
      }
      obj[item.field] = item.value;
    });

    let objs = {};
    objs[param.field] = param.value;
    if (param.value !== "") {
      Object.assign(newsRequest, objs);
    } else {
      for (let key in newsRequest) {
        if (param.field.includes(key)) {
          delete newsRequest[key];
        }
      }
    }

    dispatch.searchField({
      data: {
        ...newsRequest,
      },
      node: "request",
    });

    renderList && renderList(newsRequest);
  };

  // 重置
  // const onReset = () => {
  //   let obj = {};
  //   init.map((item) => {
  //     obj[item.field] = item.value;
  //   });
  //   setDataList([...init]);
  //   // props.data 为初始化参数，比如分页
  //   props.renderList && props.renderList({ ...obj, ...props.data });
  // };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="mr10" style={{ flex: 1 }}>
          {dataList &&
            dataList.map((item) => (
              <SelectOption
                title={item.title}
                field={item.field}
                dataSource={item}
                source={enumSource[item.field]}
                callback={callback}
              />
            ))}
          {/* {hasReset !== false ? (
        <span
          onClick={onReset}
          style={{ padding: "8px 12px", background: "#1890ff", color: "#fff" }}
        >
          重置
        </span>
      ) : (
        ""
      )} */}
        </div>
        <div style={{ flex: 1 }}>
          <Search {...props} />
        </div>
      </div>
    </>
  );
};

export default Option;
