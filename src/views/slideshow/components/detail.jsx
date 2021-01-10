import React from "react";
import { Form, Input, Radio } from "antd";

const Detail = (props) => {
  return (
    <>
      <Form.Item name="name" label="名称">
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="显示频道"
        rules={[{ type: "email" }]}
      ></Form.Item>
      <Form.Item name="status" label="状态">
        <Radio.Group>
          <Radio value={1}>开启</Radio>
          <Radio value={0}>关闭</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="width" label="宽度">
        <Input />
      </Form.Item>
      <Form.Item name="height" label="高度">
        <Input />
      </Form.Item>
      <Form.Item name="slidetype" label="滑动方向">
        <Radio.Group>
          <Radio value={1}>向左滑动</Radio>
          <Radio value={0}>向右滑动</Radio>
          <Radio value={1}>向上滑动</Radio>
          <Radio value={0}>向下滑动</Radio>
          <Radio value={0}>淡入浅出</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="焦点位置">
        <Form.Item name="focus_right" label="焦点位置">
          <Input style={{ width: 100 }} />
          (right)
        </Form.Item>
        <Form.Item name="focus_bottom" label="焦点位置">
          <Input style={{ width: 100 }} />
          (bottom)
        </Form.Item>
      </Form.Item>
      <Form.Item name="time" label="时间">
        <Input style={{ width: 100 }} />
        (毫秒)
      </Form.Item>
      <Form.Item name="speed" label="速度">
        <Input style={{ width: 100 }} />
        (毫秒)
      </Form.Item>
      <Form.Item name="btntype" label="滑动类型">
        <Radio value={"focus"}>焦点 </Radio>
        <Radio value={"arrow"}>箭头</Radio>
      </Form.Item>

      <Form.Item name="description" label="说明">
        <Input.TextArea />
      </Form.Item>
    </>
  );
};

export default Detail;
