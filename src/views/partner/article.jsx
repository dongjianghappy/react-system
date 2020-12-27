import React, { useState, useEffect } from "react";
import { Card, Form, Input, InputNumber, Button, Radio } from "antd";
import { Editor, Upload, UploadModal, WeModal, Preview } from "@/components";

import pic1 from "@/static/pic/1.jpg";
import pic2 from "@/static/pic/2.jpg";
import pic3 from "@/static/pic/3.jpg";
import pic4 from "@/static/pic/4.jpg";
import pic5 from "@/static/pic/5.jpg";
import pic6 from "@/static/pic/6.jpg";
import pic7 from "@/static/pic/7.jpg";
import pic8 from "@/static/pic/8.jpg";
import pic9 from "@/static/pic/9.jpg";
import pic10 from "@/static/pic/10.jpg";

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
      <Form.Item label="站点简介" name="content">
        <Editor value={dataSource.content} callback={callback} />
      </Form.Item>
    </>
  );
};

export default Detail;
