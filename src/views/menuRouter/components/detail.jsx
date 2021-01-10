import React from "react";
import { Form, Input, Radio, Popover, Button, Row, Col } from "antd";
import { IconList } from "@/components";

const Detail = (props) => {
  const { params, dataSource, callback } = props;

  return (
    <>
      <Form.Item name="name" label="页面" rules={[{ required: true }]}>
        <Input placeholder="请输入页面名称" />
      </Form.Item>
      <Form.Item name="path" label="路径">
        <Input placeholder="请输入路径" />
      </Form.Item>
      <Form.Item name="sort" label="顺序">
        <Input placeholder="请输入顺序" />
      </Form.Item>
      <Form.Item name="component" label="组件">
        <Input placeholder="请输入组件" />
      </Form.Item>
      <Form.Item name="authority" label="权限" rules={[{ required: true }]}>
        <Input placeholder="请输入以m:name格式的权限标记" />
      </Form.Item>
      <Form.Item name="module" label="标识">
        <Input />
      </Form.Item>
      <Form.Item label="菜单" name="isShow">
        <Radio.Group>
          <Radio value="true" defaultChecked>
            侧边栏展示
          </Radio>
          <Radio value="false">侧边栏不展示</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="是否点击" name="disabled">
        <Radio.Group>
          <Radio value="true" defaultChecked>
            可点击
          </Radio>
          <Radio value="false">不可点击</Radio>
        </Radio.Group>
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
              title="更多信息"
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
