import React from "react";
import { Form, Input, InputNumber, Radio } from "antd";
import { datetime, checkButtonAuth } from "@/utils";
import { Editor, Preview, WeDrawer } from "@/components";
import Detail from "./detail";

const List = (props) => {
  const { dataSource } = props;

  return (
    <>
      <li className="art-info-box clearfix">
        <h3>
          <WeDrawer.show
            {...props}
            title="编辑内容"
            name={
              <span
                dangerouslySetInnerHTML={{ __html: dataSource.title }}
              ></span>
            }
            isText={true}
            action="edit"
            data={{ id: dataSource.id, coding: dataSource.coding }}
            renderList={props.renderList}
            authorized={checkButtonAuth("edit")}
          >
            <Detail />
          </WeDrawer.show>
        </h3>

        {dataSource.image === "" ? (
          <>
            <span
              className="description multiple-wrap-2"
              dangerouslySetInnerHTML={{ __html: dataSource.summary }}
            ></span>
            <div className="foot">
              <i className="iconfont icon-article"></i>
              <span className="channel">资讯</span>
              <span className="cat">{dataSource.parent}</span>
              <span className="time">{datetime(dataSource.datetime)}</span>
            </div>
          </>
        ) : (
          <div className="thum-wrap">
            <div className="left">
              <WeDrawer.show
                {...props}
                title="编辑内容"
                name={<img width={200} src={dataSource.image} />}
                isText={true}
                action="edit"
                data={{ id: dataSource.id, coding: dataSource.coding }}
                renderList={props.renderList}
                authorized={checkButtonAuth("edit")}
              >
                <Detail />
              </WeDrawer.show>
            </div>
            <div className="right">
              <div
                className="description multiple-wrap-2"
                dangerouslySetInnerHTML={{
                  __html: dataSource.summary || dataSource.title,
                }}
              ></div>
              <div className="foot">
                <i className="iconfont icon-article"></i>
                <span className="channel">图片</span>
                <span className="cat">{dataSource.parent}</span>
                <span className="time">{datetime(dataSource.datetime)}</span>
              </div>
            </div>
          </div>
        )}
      </li>
    </>
  );
};

export default List;
