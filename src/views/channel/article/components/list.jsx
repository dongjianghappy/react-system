import React from "react";
import { Space, Button, Popover } from "antd";
import { Link, checkButtonAuth, authorized, codings } from "@/utils";
import { Confirm, WeCheckbox, Sorter, Status, WeModal } from "@/components";

const mod = window.location.pathname.split("/")[2] || "";

const { del, edit } = (authorized.channel[mod] &&
  authorized.channel[mod].art) || {
  del: "",
  edit: "",
};

const { art: coding, cate: catcoing } = codings[mod];
debugger;
const List = (props) => {
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
          <td className="col-md-1">浏览 | 下载</td>
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
              <td>{item.title}</td>
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
              <td>
                {item.visit}|{item.download}
              </td>
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
                  <Link
                    disabled={!checkButtonAuth(del)}
                    to={{
                      pathname: "/admin/article/detail",
                      state: { id: item.id, coding: "A0000", channel_id: 3 },
                    }}
                  >
                    编辑
                  </Link>
                  <Confirm
                    name="删除"
                    config={{
                      operating: "remove",
                      message: React.$modalEnum,
                    }}
                    data={{ coding, id: item.id }}
                    icon="write"
                    api="removeAndRestore"
                    renderList={props.getData}
                    authorized={checkButtonAuth(del)}
                    {...props}
                  />
                  <Popover
                    placement="left"
                    content={
                      <div>
                        <p>编号：{item.id}</p>
                        <p>标签: {item.label}</p>
                        <p>作者: {item.id}</p>
                        <p>来源: {item.source}</p>
                        <p>更新时间: {item.datetime}</p>
                      </div>
                    }
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
