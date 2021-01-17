import React from "react";
import { Card, Space, Popover } from "antd";
import { checkButtonAuth, authorized, codings, Link, datetime } from "@/utils";
import {
  Status,
  Confirm,
  WeDrawer,
  WeCheckbox,
  Quick,
  Order,
  SelectList,
} from "@/components";
import Detail from "./detail";
import { Operatinavbar } from "@/common";

const { add, del, edit } = authorized.link;
const { link: coding } = codings;

const List = (props) => {
  const { module } = props;
  const { list } = module;

  const render = () => {
    if (props.listType === "1") {
      return (
        <Card
          title="友情链接列表"
          extra={
            <SelectList
              enumSource={{
                status: {
                  "": "所有",
                  0: "关闭",
                  1: "开启",
                },
              }}
              init={[
                {
                  title: "状态",
                  field: "status",
                  value: "",
                  name: "所有",
                },
              ]}
              data={{ page: 0, pagesize: 15 }}
              renderList={props.renderList}
            />
          }
        >
          <table width="100%" className="table-striped table-hover col-left-23">
            <tr className="th">
              <td className="col-md-1"> 选择</td>
              <td className="col-md-2">网站名称 </td>
              <td className="col-md-2">链接地址</td>
              <td className="col-md-1">来源</td>
              <td className="col-md-1">类型</td>
              <td className="col-md-1">价格(元/月)</td>
              <td className="col-md-1">结束日期</td>
              <td className="col-md-1">状态</td>
              <td className="col-md-2">操作</td>
            </tr>
            {list &&
              list.map((item, index) => (
                <tr>
                  <td>
                    <WeCheckbox {...props} data={{ id: item.id }}></WeCheckbox>
                  </td>
                  <td>
                    <Quick
                      {...props}
                      title={item.name}
                      data={{ id: item.id, field: "name", coding }}
                      authorized={checkButtonAuth("edit")}
                    />
                  </td>
                  <td>
                    <Quick
                      {...props}
                      title={item.url}
                      data={{ id: item.id, field: "url", coding }}
                      authorized={checkButtonAuth("edit")}
                    />
                  </td>
                  <td></td>
                  <td>{item.type}</td>
                  <td>{item.price}</td>
                  <td>{datetime(item.datetime)}</td>
                  <td>
                    <Status
                      {...props}
                      data={{ item, field: "status", coding }}
                      authorized={checkButtonAuth("edit")}
                    />
                  </td>
                  <td>
                    <Space>
                      <WeDrawer.Form
                        {...props}
                        title="编辑友情链接"
                        name="编辑"
                        isText={true}
                        action="edit"
                        data={{ id: item.id, coding }}
                        renderList={props.renderList}
                        authorized={checkButtonAuth("edit")}
                      >
                        <Detail />
                      </WeDrawer.Form>
                      <Confirm
                        {...props}
                        name="删除"
                        config={{
                          operating: "delete",
                          message: React.$modalEnum,
                        }}
                        data={{ coding, id: item.id }}
                        api="delete"
                        renderList={props.renderList}
                        authorized={checkButtonAuth("delete")}
                      />
                      <Popover
                        title="订单信息"
                        placement="left"
                        content={() => (
                          <Order
                            {...props}
                            Link={Link}
                            dataSource={item}
                            data={{ fid: item.id, type: 0, coding }}
                            api="createOrder"
                          />
                        )}
                      >
                        生成订单
                      </Popover>
                    </Space>
                  </td>
                </tr>
              ))}
          </table>
        </Card>
      );
    } else if (props.listType === "2") {
      return (
        <table width="100%" className="table-striped table-hover col-left-23">
          <tr className="th">
            <td className="col-md-1">选择</td>
            <td className="col-md-2">网站名称</td>
            <td className="col-md-6">链接地址</td>
            <td className="col-md-1">状态</td>
            <td className="col-md-2">操作</td>
          </tr>
          {list &&
            list.map((item, index) => (
              <tr>
                <td>
                  <WeCheckbox {...props} data={{ id: item.id }}></WeCheckbox>
                </td>
                <td>
                  <Quick
                    {...props}
                    title={item.name}
                    data={{ id: item.id, field: "name", coding }}
                    authorized={checkButtonAuth("edit")}
                  />
                </td>
                <td>
                  <Quick
                    {...props}
                    title={item.url}
                    data={{ id: item.id, field: "url", coding }}
                    authorized={checkButtonAuth("edit")}
                  />
                </td>
                <td>
                  <Status
                    {...props}
                    data={{ item, field: "status", coding }}
                    authorized={checkButtonAuth("edit")}
                  />
                </td>
                <td>
                  <Space>
                    <WeDrawer.Form
                      {...props}
                      title="编辑友情链接"
                      name="编辑"
                      isText={true}
                      action="edit"
                      data={{ id: item.id, coding }}
                      renderList={props.renderList}
                      authorized={checkButtonAuth("edit")}
                    >
                      <Detail />
                    </WeDrawer.Form>
                    <Confirm
                      {...props}
                      name="删除"
                      config={{
                        operating: "delete",
                        message: React.$modalEnum,
                      }}
                      data={{ coding, id: item.id }}
                      api="delete"
                      renderList={props.renderList}
                      authorized={checkButtonAuth("delete")}
                    />
                  </Space>
                </td>
              </tr>
            ))}
        </table>
      );
    } else if (props.listType === "3") {
      return (
        <table width="100%" className="table-striped table-hover col-left-23">
          <tr class="th">
            <td class="col-md-1">选择</td>
            <td class="col-md-2">网站名称</td>
            <td class="col-md-2">链接地址</td>
            <td class="col-md-2">站长</td>
            <td class="col-md-2">QQ</td>
            <td class="col-md-2">申请时间</td>
            <td class="col-md-1">操作</td>
          </tr>
          {list &&
            list.map((item, index) => (
              <tr>
                <td>
                  <WeCheckbox {...props} data={{ id: item.id }}></WeCheckbox>
                </td>
                <td>
                  <Quick
                    {...props}
                    title={item.name}
                    data={{ id: item.id, field: "name", coding }}
                    authorized={checkButtonAuth("edit")}
                  />
                </td>
                <td>
                  <Quick
                    {...props}
                    title={item.url}
                    data={{ id: item.id, field: "url", coding }}
                    authorized={checkButtonAuth("edit")}
                  />
                </td>
                <td>{item.webmaster}</td>
                <td>{item.qq}</td>
                <td>{datetime(item.datetime)}</td>
                <td>
                  <Space>
                    <Confirm
                      {...props}
                      name="删除"
                      config={{
                        operating: "delete",
                        message: React.$modalEnum,
                      }}
                      data={{ coding, id: item.id }}
                      api="delete"
                      renderList={props.renderList}
                      authorized={checkButtonAuth("delete")}
                    />
                    <Confirm
                      {...props}
                      name="审核"
                      config={{
                        operating: "check",
                        message: React.$modalEnum,
                      }}
                      data={{ coding, id: item.id }}
                      api="applyCheck"
                      renderList={props.renderList}
                      authorized={checkButtonAuth("delete")}
                    />
                  </Space>
                </td>
              </tr>
            ))}
        </table>
      );
    }
  };

  return (
    <>
      {render()}
      <Operatinavbar
        {...props}
        button={["all", "delete", "open", "close"]}
        data={{ list: module.checkedList, coding }}
        renderList={props.renderList}
        checkButtonAuth={checkButtonAuth}
        authorized={authorized}
      />
    </>
  );
};

export default List;
