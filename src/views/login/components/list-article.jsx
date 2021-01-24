import React from "react";
import { Form, Input, InputNumber, Radio } from "antd";
import { Editor, Preview } from "@/components";

const List = (props) => {
  const { dataSource, handleShow } = props;

  return (
    <>
      <li className="art-info-box clearfix">
        <h3 onClick={() => handleShow(dataSource.id)}>
          <span>前端开发</span>
          |前端框架|前端资源|网站<span>前端开发</span>
          -前端这点事
        </h3>
        <div className="description">
          2017年3月28日 二、Mysql的分页查询语句的性能分析
          MySql分页sql语句,如果和MSSQL的TOP语法相比,那么MySQL的LIMIT语法要显得优雅了许多。使用它来分页是再自然不过的...
        </div>
        <div className="foot">
          <i className="iconfont icon-article"></i>
          <span className="channel">资讯</span>
          <span className="cat">网站建设</span>
          <span className="time">2021-01-20 14:03:06</span>
        </div>
      </li>
    </>
  );
};

export default List;
