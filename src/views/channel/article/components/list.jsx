import React from "react";
import { Space, Button, Popover } from "antd";
import { Link, checkButtonAuth, authorized, codings } from "@/utils";
import {
  Confirm,
  WeCheckbox,
  Sorter,
  Status,
  WeModal,
  ContentTag,
} from "@/components";
import More from "./more";

const mod = window.location.pathname.split("/")[2] || "";

const { del, edit } = (authorized.channel[mod] &&
  authorized.channel[mod].art) || {
  del: "",
  edit: "",
};

const { art: coding, cate: catcoing } = codings[mod];
const List = (props) => {
  debugger;
  return (
    <>
      <table
        width="100%"
        className="table-striped table-hover artlist col-left-3"
      >
        <tr className="th">
          <td className="col-md-1">选择</td>
          <td className="col-md-1 sorter">
            <Sorter title="ID" renderList={props.getData} field="id" />
          </td>
          <td className="col-md-3">名称</td>
          <td className="col-md-2">分类</td>
          <td className="col-md-1">浏览</td>
          <td className="col-md-1">发布时间</td>
          <td className="col-md-1">状态</td>
          <td className="col-md-2">操作</td>
        </tr>
        {props.data &&
          props.data.map((item, index) => (
            <tr class="tr-list">
              <td>
                <WeCheckbox data={{ id: item.id }} {...props}></WeCheckbox>
              </td>
              <td>{item.id}</td>
              <td>
                {item.title}
                <ContentTag item={item} />
              </td>
              <td>
                <WeModal.Cate
                  {...props}
                  data={{ id: item.id, coding, catcoing }}
                >
                  {item.parent ? item.parent : "未分类"}
                </WeModal.Cate>
                {/* <ModalCate
                  {...props}
                  id={item.id}
                  artCoding="A0000"
                  coding="A0001"
                >
                  {item.parent ? item.parent : "未分类"}
                </ModalCate> */}
              </td>
              <td>{item.visit}</td>
              <td>{item.datetime}</td>
              <td>
                <Status
                  {...props}
                  data={{ item, field: "checked", coding }}
                  authorized={checkButtonAuth(edit)}
                />
              </td>
              <td>
                <Space size="middle">
                  <span
                    disabled={!checkButtonAuth(del)}
                    onClick={() =>
                      props.history.push(
                        `/admin/article/detail?channel=2&id=${item.id}`
                      )
                    }
                  >
                    编辑
                  </span>
                  <Confirm
                    name="删除"
                    config={{
                      operating: "remove",
                      message: React.$modalEnum,
                    }}
                    data={{ coding, id: item.id }}
                    api="removeAndRestore"
                    renderList={props.getData}
                    authorized={checkButtonAuth(del)}
                    {...props}
                  />
                  <Confirm
                    {...props}
                    name={item.istop === "1" ? "取消" : "置顶"}
                    config={{
                      operating: item.istop === "1" ? "cancelTop" : "setTop",
                      message: React.$modalEnum.top,
                    }}
                    data={{
                      coding,
                      id: item.id,
                      field: "istop",
                      value: item.istop === "1" ? "0" : "1",
                    }}
                    api="changeData"
                    renderList={props.renderList}
                    authorized={checkButtonAuth("del")}
                  />
                  <Popover
                    title="更多信息"
                    placement="left"
                    content={() => (
                      <More
                        {...props}
                        dataSource={item}
                        data={{ fid: item.id, type: 0, coding }}
                      />
                    )}
                  >
                    <Button type="link" size="small">
                      更多
                    </Button>
                  </Popover>
                </Space>
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default List;
