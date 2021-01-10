import React from "react";
import { Form, Input } from "antd";
import { WeAlert } from "@/components";

const Collection = (props) => {
  return (
    <>
      <h3 className="mb25">节点名称: 张文钦</h3>
      <WeAlert
        description={
          <>
            <p>1、采集网址必须为完整URL地址</p>
            <p>2、开始区域和结束区域必须为采集页面唯一一个html代码标识</p>
            <p>3、采集对象必须放置在双引号里，内容用'(.*)'表示例: </p>
            <p>
              4、字段和(.*)对应，并以逗号分开，有效匹配字段title、url、image，无效匹配字段invalid
            </p>
          </>
        }
      ></WeAlert>
      <Form.Item name="url" label="采集地址" className="mt10">
        <Input
          placeholder="http://yunxi10.com/web/2.html"
          className=" input-sm"
        />
      </Form.Item>

      <Form.Item name="areastart" label="HTML开始">
        <Input.TextArea placeholder="infinite_scroll" />
      </Form.Item>

      <Form.Item name="areaend" label="HTML结束">
        <Input.TextArea placeholder="page" />
      </Form.Item>

      <Form.Item name="obje" label="采集HTML">
        <Input.TextArea placeholder="正则: <a href='(.*)' target='_blank'><img alt='(.*)' src='(.*)' /></a>" />
      </Form.Item>
      <Form.Item name="field" label="字段">
        <Input.TextArea placeholder="title,url,image,invalid" />
      </Form.Item>
    </>
  );
};

export default Collection;
