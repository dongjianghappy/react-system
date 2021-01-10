import React from "react";
import { Input, Form, Radio } from "antd";
import {
  TitleAttribute,
  Editor,
  Keyword,
  Preview,
  WeModal,
} from "@/components";
import { CheckboxGroup } from "@/common";

const Basic = (props) => {
  const { dataSource, callback, coding } = props;

  return (
    <>
      <Form.Item label="知识标题">
        <Input.Group compact>
          <Form.Item name="title">
            <Input
              placeholder="请输入文章标题"
              className="input-sm input-350"
              style={{ float: "left" }}
            />
          </Form.Item>
          <Form.Item name="source_url">
            <TitleAttribute />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item label="tag标签" name="keyword">
        <Keyword
          {...props}
          field="keyword"
          value={dataSource.keyword}
          callback={callback}
        />
      </Form.Item>
      <Form.Item label="所属分类" name="fid">
        <WeModal.Cate
          {...props}
          data={{
            id: dataSource.id,
            coding: coding.art,
            catcoing: coding.cate,
          }}
        >
          {dataSource.parent ? dataSource.parent : "未分类"}
        </WeModal.Cate>
      </Form.Item>
      <Form.Item label="是否启用" name="checked">
        <Radio.Group>
          <Radio value="1">是</Radio>
          <Radio value="0">否</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="预览图" name="image">
        <div style={{ width: 530 }}>
          <Preview
            authorized={true}
            value={dataSource.image}
            callback={callback}
            params={props}
          />
        </div>
      </Form.Item>
      <Form.Item label="正文" name="content">
        <Editor value={dataSource.content} callback={callback} />
      </Form.Item>
      <Form.Item label="摘要" name="summary">
        <Input.TextArea className="input-sm" placeholder="请输入内容摘要" />
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
