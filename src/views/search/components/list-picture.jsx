import React from "react";
import { Form, Input, InputNumber, Radio } from "antd";
import { datetime } from "@/utils";
import { Editor, Preview } from "@/components";

const List = (props) => {
  const { dataSource, handleShow } = props;

  return (
    <>
      <li className="art-info-box clearfix">
        <h3 onClick={() => handleShow(dataSource.id)}>{dataSource.title}</h3>
        <div className="thum-wrap">
          <div className="left">
            <img
              width={200}
              src={dataSource.image}
              onClick={() => handleShow(dataSource.id)}
            />
          </div>
          <div className="right">
            <div className="description multiple-wrap-2">
              {dataSource.summary || dataSource.title}
            </div>
            <div className="foot">
              <i className="iconfont icon-article"></i>
              <span className="channel">图片</span>
              <span className="cat">{dataSource.parent}</span>
              <span className="time">{datetime(dataSource.datetime)}</span>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default List;
