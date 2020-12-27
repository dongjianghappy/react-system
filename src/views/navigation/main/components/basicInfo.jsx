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
} from "antd";
import { WeModal } from "@/components";
import { CheckboxGroup } from "../../../../common";
const { Option } = Select;

const Form1 = (props) => {
  const { params, dataSource, callback, coding } = props;
  const { navType } = React.$enums;

  return (
    <>
      <Form.Item label="导航名称" name="name">
        <Input className="input-sm input-250" />
      </Form.Item>
      <Form.Item label="导航连接" name="url">
        <Input className="input-sm input-350" />
      </Form.Item>
      <Form.Item label="所属导航" name="">
        <WeModal.Cate
          {...params}
          data={{ id: dataSource.id, coding: coding, catcoing: coding }}
        >
          {dataSource.parent ? dataSource.parent : "未分类"}
        </WeModal.Cate>
      </Form.Item>
      <Form.Item label="顺序" name="sort">
        <Input className="input-sm input-100" />
      </Form.Item>
      <Form.Item label="启用" name="status">
        <Radio.Group>
          <Radio value="1" defaultChecked>
            是
          </Radio>
          <Radio value="0">否</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="类型" name="navtype">
        <Select className="w150" defaultValue="main">
          {navType.map((item) => (
            <Option value={item.value}>{item.name}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="聚合标签" name="flag">
        <CheckboxGroup tagList={props.flags} />
      </Form.Item>
    </>
  );
};

export default Form1;
