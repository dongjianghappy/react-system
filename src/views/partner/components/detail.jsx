import React from "react";
import { Form, Input, InputNumber, Radio } from "antd";
import { Editor, Preview } from "@/components";

const Detail = (props) => {
  const { params, dataSource, callback } = props;

  return (
    <>
      <Form.Item name="name" label="伙伴名称" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item name="url" label="url地址">
        <Input />
      </Form.Item>
      <Form.Item name="sort" label="顺序">
        <InputNumber />
      </Form.Item>
      <Form.Item name="status" label="显示">
        <Radio.Group>
          <Radio value="1" defaultChecked>
            是
          </Radio>
          <Radio value="0">否</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="image" label="预览图">
        <Preview
          authorized={true}
          data={params.data}
          value={dataSource.image}
          callback={callback}
          params={params}
        />
      </Form.Item>
      <Form.Item label="站点简介" name="content">
        <Editor value={dataSource.content} callback={callback} />
      </Form.Item>
    </>
  );
};

export default Detail;
