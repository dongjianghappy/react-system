import React from "react";

import { ZoomInOutlined, ZoomOutOutlined } from "@ant-design/icons";

const ContentTag = (props) => {
  debugger;
  return (
    <>
      {props.item.image.length > 0 ? <ZoomInOutlined /> : ""}
      {props.item.content ? <ZoomOutOutlined /> : ""}
    </>
  );
};

export default ContentTag;
