import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { jsonLength } from "@/utils";
import { Search } from "../components/index.js";

const Option = (props) => {
  const {
    common: {
      global: { request, initPage, clear },
    },
    renderList,
    dispatch,
  } = props;

  const [current, setCurrent] = useState({}); // 当前行选择状态

  // 初始化中默认为第一个选项
  // 当init的值为true时，则表示初始化状态，初始化时，默认选中第一个值，所有行的field值为空
  useEffect(() => {
    if (clear) {
      const cutt = {};
      const param = {};

      props.option.map((item, index) => {
        cutt[`row${index}`] = 0;
        param[item.field] = "";
      });
      setCurrent(cutt);

      dispatch.searchField({
        data: false,
        node: "clear",
      });
    }
  }, [request]);

  const handleCondition = (param) => {
    const newsRequest = { ...request, ...initPage };
    current[param.row] = param.index;
    setCurrent({ ...current });
    let obj = {};
    obj[param.field] = param.value;
    if (param.value !== "") {
      Object.assign(newsRequest, obj);
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

  return (
    <div className="condition p0">
      {props.search && props.search.show === true ? (
        <Row className="mb25">
          <Col>
            <Search {...props} />
          </Col>
        </Row>
      ) : (
        ""
      )}

      <Row
        className="ptb10"
        style={{ background: "#f9f9f9", border: "1px solid #eee" }}
      >
        {props.option.map((item, index) => (
          <Col span="24" className="col " key={index}>
            <span className="bold">{item.name}</span>
            {item.list.map((items, i) => (
              <span
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
              </span>
            ))}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Option;
