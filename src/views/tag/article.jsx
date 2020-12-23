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
  debugger;
  return (
    <>
      <Form.Item name="name" label="名称" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
    </>
  );
};

export default Detail;
