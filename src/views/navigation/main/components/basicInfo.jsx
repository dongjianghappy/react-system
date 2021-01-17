import React, { useState, useEffect } from "react";
import { Input, Form, Radio, Select } from "antd";
import { WeModal } from "@/components";
import { CheckboxGroup } from "@/common";
const { Option } = Select;

const Basic = (props) => {
  const { params, dataSource, callback, coding } = props;
  const { navType } = React.$enums;
  const [navtype, setNavtype] = useState("");
  useEffect(() => {
    setNavtype("main");
  }, []);

  return (
    <>
      <Form.Item label="导航名称" name="name">
        <Input className="input-sm input-250" />
      </Form.Item>
      <Form.Item label="导航连接" name="url">
        <Input className="input-sm input-350" />
      </Form.Item>
      <Form.Item label="所属导航" name="fid">
        <WeModal.Cate
          {...params}
          data={{ id: dataSource.id, coding: coding, catcoing: coding }}
          callback={callback}
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
        <Select key={navtype} className="w150" defaultValue={navtype}>
          {navType.map((item) => (
            <Option value={item.value}>{item.name}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="聚合标签" name="checkboxList">
        <CheckboxGroup
          dataSource={dataSource}
          flagList={props.flags}
          callback={callback}
        />
      </Form.Item>
    </>
  );
};

export default Basic;
