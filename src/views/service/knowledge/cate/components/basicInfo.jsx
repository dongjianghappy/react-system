import React from "react";
import { Input, Form, Radio, Select } from "antd";
import { Preview, WeModal } from "@/components";

const { Option } = Select;

const Form1 = (props) => {
  const { params, dataSource, callback, coding } = props;

  return (
    <>
      <Form.Item label="分类名称" name="name">
        <Input className="input-sm input-250" />
      </Form.Item>
      <Form.Item label="所属分类" name="">
        <WeModal.Cate
          {...params}
          data={{ id: dataSource.id, coding: coding, catcoing: coding }}
        >
          {dataSource.parent ? dataSource.parent : "未分类"}
        </WeModal.Cate>
      </Form.Item>
      <Form.Item label="类型" name="type">
        <Select className="w150">
          {React.$enums.navType.map((item) => (
            <Option value={item.value}>{item.name}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="标签调用" name="icon">
        <Input className="input-sm input-100" />
      </Form.Item>
      <Form.Item label="顺序" name="sort">
        <Input className="input-sm input-100" />
      </Form.Item>
      <Form.Item label="显示" name="status">
        <Radio.Group>
          <Radio value="1" defaultChecked>
            是
          </Radio>
          <Radio value="0">否</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="保存目录" name="dir_file">
        <Input className="input-sm input-150" />
      </Form.Item>
      <Form.Item label="默认名称" name="html">
        <Input className="input-sm input-150" />
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
    </>
  );
};

export default Form1;
