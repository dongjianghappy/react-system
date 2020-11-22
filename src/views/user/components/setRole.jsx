import React, { useState, useEffect } from "react";
import { Form, Button, Select } from "antd";

const { Option, OptGroup } = Select;

const SetRole = (props) => {
  return (
    <>
      <Form.Item label="角色名称" name="role">
        <Select defaultValue={props.role}>
          {props.list &&
            props.list.map((item) => (
              <Option value={item.id} key={item.id}>
                {item.name}
              </Option>
            ))}
        </Select>
      </Form.Item>
    </>
  );
};

export default SetRole;
