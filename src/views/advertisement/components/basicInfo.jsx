import React from "react";
import {
  Space,
  Card,
  Table,
  Checkbox,
  Button,
  Input,
  Form,
  Radio,
  Select,
  DatePicker,
} from "antd";
import { Preview } from "@/components";
const { Option } = Select;
const Form1 = (props) => {
  const { linkType } = React.$enums;
  const { params, dataSource, callback } = props;

  return (
    <>
      <Form.Item name="name" label="名称" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="sort" label="顺序">
        <Input />
      </Form.Item>
      <Form.Item name="status" label="显示">
        <Radio.Group>
          <Radio value="1" defaultChecked>
            是
          </Radio>
          <Radio value="0">否</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="source" label="来源">
        <Select className="w150" defaultValue="0">
          {linkType.map((item) => (
            <Option value={item.value}>{item.name}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="display" label="显示页面">
        <Select className="w150" defaultValue="0">
          {linkType.map((item) => (
            <Option value={item.value}>{item.name}</Option>
          ))}
        </Select>
      </Form.Item>
      {/* <Form.Item name="url" label="广告位">
        <Input />
      </Form.Item> */}

      <Form.Item name="type" label="类型">
        <Radio.Group defaultValue="img" size="large" buttonStyle="solid">
          <Radio.Button value="img">图片</Radio.Button>
          <Radio.Button value="text">文字</Radio.Button>
          <Radio.Button value="code">代码</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="url" label="链接">
        <Input.TextArea></Input.TextArea>
      </Form.Item>
      <Form.Item name="content" label="内容">
        <Input.TextArea></Input.TextArea>
      </Form.Item>
      <Form.Item name="price" label="价格">
        <Input />
      </Form.Item>
      <Form.Item label="宽高">
        <Form.Item name="width">
          <Input className="input-150" />
        </Form.Item>
        <Form.Item name="height">
          <Input className="input-150" />
        </Form.Item>
      </Form.Item>
      <Form.Item name="image" label="效果预览">
        {/* <Upload image={props.data.image} /> */}
        {/* <WeModal.Picture
          src={
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          }
        />
        <WeModal.Album
          data={[pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic10]}
        />
        <UploadModal /> */}
        <Preview
          authorized={true}
          data={params.data}
          value={dataSource.image}
          callback={callback}
          params={params}
        />
      </Form.Item>
    </>
  );
};

export default Form1;
