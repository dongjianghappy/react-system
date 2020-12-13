import React, { useState, useEffect } from "react";
import { Drawer, Button, Form, Input, Select, Radio } from "antd";

const { Option } = Select;

const Detail = (props) => {
  const { params, dataSource, callback } = props;
  debugger;
  return (
    <>
      <h2 className="mb25">节点名称: 张文钦</h2>

      <Form.Item name="url" label="采集地址">
        <Input placeholder="采集网址必须为静态页面" className=" input-sm" />
      </Form.Item>

      <Form.Item name="areastart" label="HTML开始">
        <Input.TextArea placeholder="开始区域必须为采集页面唯一一个标识" />
      </Form.Item>

      <Form.Item name="areaend" label="HTML结束">
        <Input.TextArea placeholder="结束区域必须为采集页面唯一一个标识" />
      </Form.Item>

      <Form.Item name="obje" label="采集HTML">
        <Input.TextArea placeholder="采集对象必须放置在双引号里，内容用'(.*)'表示例如" />
      </Form.Item>
    </>
  );
};

export default Detail;
