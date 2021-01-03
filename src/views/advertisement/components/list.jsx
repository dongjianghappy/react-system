import React from "react";
import { Space, Popover, Card } from "antd";
import { Link, checkButtonAuth, authorized, codings } from "@/utils";
import {
  Status,
  Confirm,
  WeDrawer,
  WeCheckbox,
  Quick,
  Order,
} from "@/components";
import Detail from "./detail";
import { Operatinavbar } from "@/common";

const { add, del, edit } = authorized.advertisement;
const { advertisement: coding } = codings;

const List = (props) => {
  const { data } = props;
  debugger;

  return (
    <>
      <Card>
        <table width="100%" className="table-striped table-hover col-left-2">
          <tr>
            <td className="col-md-1">选择</td>
            <td className="col-md-2">广告名称</td>
            <td className="col-md-1">尺寸类型</td>
            <td className="col-md-2">广告位置</td>
            <td className="col-md-1">每月/元</td>
            <td className="col-md-2">时间</td>
            <td className="col-md-1">状态</td>
            <td className="col-md-2">操作</td>
          </tr>
          {props.data &&
            props.data.map((item, index) => (
              <tr className="tr-list">
                <td>
                  <WeCheckbox {...props} data={{ id: item.id }}></WeCheckbox>
                </td>
                <td>
                  <Quick
                    id={item.id}
                    title={item.name}
                    field="name"
                    coding="P0008"
                    changeData={props.changeData}
                  />
                </td>
                <td>{item.size_type}</td>
                <td>{item.size}</td>
                <td>{item.price}</td>
                <td>{item.last_time}</td>
                <td>
                  <Status
                    {...props}
                    data={{ item, field: "status", coding }}
                    authorized={checkButtonAuth(edit)}
                  />
                </td>
                <td>
                  <Space>
                    <WeDrawer.Form
                      {...props}
                      title="编辑广告"
                      name="编辑"
                      isText={true}
                      action="edit"
                      data={{ id: item.id, coding }}
                      renderList={props.getData}
                      authorized={checkButtonAuth(edit)}
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
                      renderList={props.getData}
                      authorized={checkButtonAuth(del)}
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
    </>
  );
};

export default List;
