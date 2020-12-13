import React from "react";

import { ZoomInOutlined, ZoomOutOutlined } from "@ant-design/icons";

const ContentTag = (props) => {
  return (
    <>
      {props.item.image.length > 0 ? <i class="iconfont icon-img"></i> : ""}
      {props.item.content ? <i class="iconfont icon-article"></i> : ""}
    </>
  );
};

export default ContentTag;
