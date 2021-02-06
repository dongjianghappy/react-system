import React, { useState, useEffect } from "react";
import { Row, Col, Popover } from "antd";

const Option = (props) => {
  const { title, field, source, dataSource, callback } = props;

  const onChecked = (key) => {
    dataSource.name = source[key];
    dataSource.value = key;

    callback(dataSource);
  };

  return (
    <>
      <span
        className="bg-eee block"
        style={{
          marginLeft: 10,
          height: 30,
          padding: "5px 10px",
        }}
      >
        <Popover
          placement="bottom"
          trigger="click"
          content={
            <div>
              {Object.keys(source).map((key) => (
                <p onClick={() => onChecked(key)}>{source[key]}</p>
              ))}
            </div>
          }
        >
          {title ? <span>{title}: </span> : ""}
          <span>{source[dataSource.value]}</span>
        </Popover>
      </span>
    </>
  );
};

export default Option;
