import React, { useState, useEffect } from "react";
import { Row, Col, Popover } from "antd";
import SelectOption from "./select";

const Option = (props) => {
  const { init, enumSource, flagList } = props; // 初始化数据
  const [data, setData] = useState(init); // 当前数据

  // 选择
  const callback = (parems) => {
    let obj = {};
    data.map((item) => {
      if (item.field === parems.field) {
        item.name = parems.name;
        item.value = parems.value;
      }
      obj[item.field] = item.value;
    });
    setData([...data]);
    props.renderList(obj);
  };

  // 重置
  const onReset = () => {
    let obj = {};
    init.map((item) => {
      obj[item.field] = item.value;
    });
    setData([...init]);
    props.renderList(obj);
  };

  return (
    <>
      {data &&
        data.map((item) => (
          <SelectOption
            title={item.title}
            field={item.field}
            dataSource={item}
            source={enumSource[item.field]}
            callback={callback}
          />
        ))}
      <span
        onClick={onReset}
        style={{ padding: "8px 12px", background: "#1890ff", color: "#fff" }}
      >
        重置
      </span>
    </>
  );
};

export default Option;
