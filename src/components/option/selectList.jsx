import React, { useState, useEffect } from "react";
import { Row, Col, Popover } from "antd";
import SelectOption from "./select";

const Option = (props) => {
  const { init, enumSource, flagList, hasReset } = props; // 初始化数据
  const [dataList, setDataList] = useState(init); // 当前数据

  // 选择
  const callback = (parems) => {
    let obj = {};
    dataList.map((item) => {
      if (item.field === parems.field) {
        item.name = parems.name;
        item.value = parems.value;
      }
      obj[item.field] = item.value;
    });
    setDataList([...dataList]);
    props.renderList && props.renderList(obj);
  };

  // 重置
  const onReset = () => {
    let obj = {};
    init.map((item) => {
      obj[item.field] = item.value;
    });
    setDataList([...init]);
    // props.data 为初始化参数，比如分页
    props.renderList && props.renderList({ ...obj, ...props.data });
  };

  return (
    <>
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
      {hasReset !== false ? (
        <span
          onClick={onReset}
          style={{ padding: "8px 12px", background: "#1890ff", color: "#fff" }}
        >
          重置
        </span>
      ) : (
        ""
      )}
    </>
  );
};

export default Option;
