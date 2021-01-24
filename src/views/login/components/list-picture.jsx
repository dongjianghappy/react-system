import React from "react";
import { Form, Input, InputNumber, Radio } from "antd";
import { Editor, Preview } from "@/components";

const List = (props) => {
  const { dataSource, handleShow } = props;

  return (
    <>
      <li className="art-info-box clearfix">
        <h3 onClick={() => handleShow(dataSource.id)}>
          <span>前端</span>
          程序员培训班_HTML&JS+<span>前端</span>
          培训_黑马程序员-首页
        </h3>
        <div className="thum-wrap">
          <div className="left">
            <img
              width={200}
              src="https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1883725014.png"
              onClick={() => handleShow(dataSource.id)}
            />
          </div>
          <div className="right">
            <div className="description">
              2017年3月28日 二、Mysql的分页查询语句的性能分析
              MySql分页sql语句,如果和MSSQL的TOP语法相比,那么MySQL的LIMIT语法要显得优雅了许多。使用它来分页是再自然不过的...
            </div>
            <div className="foot">
              <i className="iconfont icon-article"></i>
              <span className="channel">图片</span>
              <span className="cat">摄影</span>
              <span className="time">2021-01-20 14:03:06</span>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default List;
