import React from "react";
import { Form, Input, Radio, Select } from "antd";
import { Editor, Preview } from "@/components";
const { Option } = Select;
const Detail = (props) => {
  const { params, dataSource, callback, gradeList } = props;

  return (
    <>
      <Form.Item name="name" label="应用名称">
        <Input className=" input-sm" />
      </Form.Item>
      <Form.Item name="sort" label="顺序">
        <Input className=" input-sm input-100" />
      </Form.Item>
      <Form.Item name="status" label="状态">
        <Radio.Group>
          <Radio value="1" defaultChecked>
            开启
          </Radio>
          <Radio value="0">关闭</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="grade_id" label="应用权限">
        <Select className="w150" defaultValue={gradeList[0].id}>
          {gradeList &&
            gradeList.map((item) => (
              <Option value={item.id}>{item.name}</Option>
            ))}
        </Select>
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
      <Form.Item name="url" label="应用链接">
        <Input className=" input-sm" />
      </Form.Item>
      <Form.Item name="description" label="功能描述">
        <Input.TextArea />
      </Form.Item>
    </>
  );
};

export default Detail;
