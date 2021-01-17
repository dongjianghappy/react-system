import React from "react";
import { Form, Input, Radio, Popover, Button, Row, Col, Select } from "antd";
import { IconList } from "@/components";
const { Option } = Select;
const Detail = (props) => {
  const { params, dataSource, callback } = props;
  const { labelType } = React.$enums;

  const time = () => {
    let date = new Date();

    return `${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getSeconds()}${date.getMinutes()}`;
  };

  return (
    <>
      <Form.Item name="channel_id" label="频道">
        <Input placeholder="请输入备注" />
      </Form.Item>
      <Form.Item name="name" label="频道">
        <Input value={time()} />
      </Form.Item>
      <Form.Item name="remark" label="备注">
        <Input placeholder="请输入备注" />
      </Form.Item>
      <Form.Item name="value" label="值">
        <Input placeholder="请输入值" />
      </Form.Item>
      <Form.Item name="type" label="类型">
        <Select className="w150" defaultValue="art">
          {labelType.map((item) => (
            <Option value={item.value}>{item.name}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="sort" label="顺序">
        <Input placeholder="请输入顺序" />
      </Form.Item>
      <Form.Item name="tag" label="tag值">
        <Input placeholder="请输入tag值" />
      </Form.Item>
      <Form.Item label="图标">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item name="icon" label="图标">
              <Input placeholder="icon图标" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Popover
              title="选择图标"
              placement="bottom"
              content={() => (
                <IconList value={dataSource.image} callback={callback} />
              )}
            >
              <Button type="link" size="small">
                选择图标
              </Button>
            </Popover>
          </Col>
        </Row>
      </Form.Item>
    </>
  );
};

export default Detail;
