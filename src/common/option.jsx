import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";

const Option = (props) => {
  const { dispatch, coding } = props;
  const [isInit, setIsInit] = useState(true); // 是否初始化状态
  const [current, setCurrent] = useState({}); // 当前行选择状态
  const [condition, setCondition] = useState({}); // 查询查询字段

  // 初始化中默认为第一个选项
  // 当init的值为true时，则表示初始化状态，初始化时，默认选中第一个值，所有行的field值为空
  useEffect(() => {
    if (isInit) {
      const cutt = {};
      const param = {};

      props.option.map((item, index) => {
        cutt[`row${index}`] = 0;
        param[item.field] = "";
      });
      setIsInit(false);
      setCurrent(cutt);
      setCondition(param);
    }
  }, []);

  const handleCondition = (param) => {
    debugger;
    // react纯函数组件useState更新页面不刷新
    // 当修改原数组时，如果原数组是个深层数组（不只一层），使用setTextList修改时，不会触发页面刷新
    // 这里我的解决方案是，先将原数组深拷贝，赋值给新数组，再修改新数组，将修改后的新数组传递进去，这样就会引起视图更新。
    current[param.row] = param.index;
    setCurrent({ ...current });

    condition[param.field] = param.value;
    setCondition({ ...condition });

    dispatch.select({
      api: props.api,
      data: {
        coding: coding,
        page: 0,
        pagesize: 15,
        ...condition,
      },
      node: props.node,
    });
  };

  return (
    <div className="condition p0">
      <Row className="p20" style={{ background: "#f9f9f9" }}>
        {props.option.map((item, index) => (
          <Col span="24" className="col " key={index}>
            <span>{item.name}: </span>
            {item.list.map((items, i) => (
              <a
                key={i}
                className={`${
                  parseInt(current["row" + index]) === i ? "option-current" : ""
                }`}
                onClick={() =>
                  handleCondition({
                    row: `row${index}`,
                    index: i,
                    field: item.field,
                    value: items.tag || items.value,
                  })
                }
              >
                {items.remark || items.name}
              </a>
            ))}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Option;
