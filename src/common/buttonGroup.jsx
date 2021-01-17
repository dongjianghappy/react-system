import React from "react";
import { Space, Button, message } from "antd";
import R_button from "../components/button";
import { Confirm } from "@/components";

const ButtonGroup = (props) => {
  const { add, del, edit } = props.authorized;

  const { dispatch, module } = props;
  const render = (data) => {
    if (module.checkedList.length === 0) {
      message.info("请选择数据");
      return true;
    }
  };

  // 全选
  const checkedAll = () => {
    const data = [];
    module[module.node].forEach((Item) => {
      data.push({
        id: Item.id,
      });
    });

    dispatch.checkBox({
      node: module.node,
      type: "all",
      value: data,
    });
  };

  return (
    <Space style={{ marginTop: 25 }}>
      {props.button &&
        props.button.map((item, index) => {
          if (item === "all") {
            return (
              <R_button.button
                click={checkedAll}
                name="全选"
                title="全选"
                size="default"
              />
            );
          } else if (item === "delete") {
            return (
              <Confirm
                {...props} // props 提升主要防止authorized 覆盖
                name="删除"
                isText={false}
                config={{ operating: "alldelete", message: React.$modalEnum }}
                api="delete"
                render={render}
                renderList={props.renderList}
                authorized={props.checkButtonAuth("del")}
              />
            );
          } else if (item === "open") {
            return (
              <Confirm
                {...props}
                name="开启"
                isText={false}
                config={{ operating: "allopen", message: React.$modalEnum }}
                api="openAndClose"
                params={{ operating: "open" }}
                render={render}
                authorized={props.checkButtonAuth("edit")}
              />
            );
          } else if (item === "close") {
            return (
              <Confirm
                {...props}
                name="关闭"
                isText={false}
                config={{ operating: "allclose", message: React.$modalEnum }}
                api="openAndClose"
                params={{ operating: "close" }}
                render={render}
                authorized={props.checkButtonAuth("edit")}
              />
            );
          }
          // } else if (item === "move") {
          //   return (
          //     <R_button.button
          //       click={handleClick}
          //       name="移动"
          //       title="移动"
          //       size="default"
          //       dispatch="popup"
          //       node="dialog"
          //       fn="getDelete"
          //     />
          //   );
          // }
        })}
    </Space>
  );
};

export default ButtonGroup;
