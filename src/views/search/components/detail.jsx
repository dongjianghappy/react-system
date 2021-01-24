import React from "react";
import { Form, Input, InputNumber, Radio, Select, DatePicker } from "antd";
const { Option } = Select;

const Detail = (props) => {
  const { dispatch, data, response } = props;
  debugger;
  return (
    <>
      <p>{response.title}</p>
      <p>标签: {response.tag}</p>
      <p>标签: {response.content}</p>
    </>
  );
};

export default Detail;
