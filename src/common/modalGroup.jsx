import React from "react";
import { Space, Button } from "antd";
import { WeDrawer, Dialog } from "../components";

const modalGroup = (props) => {
  const handleOk = (data) => {
    props[data.global.data.fn](data);
  };

  return (
    <>
      {/* 抽屉弹窗 */}
      {props.global.drawer.status ? (
        props.global.drawer.type === "form" ? (
          <WeDrawer.Form {...props}>
            {props.global.drawer.component ? (
              <props.global.drawer.component {...props} />
            ) : (
              ""
            )}
          </WeDrawer.Form>
        ) : (
          <WeDrawer.show {...props}>
            {props.global.drawer.component ? (
              <props.global.drawer.component {...props} />
            ) : (
              ""
            )}
          </WeDrawer.show>
        )
      ) : (
        ""
      )}

      {/* 弹出层 */}
      {props.global.dialog.status ? (
        <Dialog
          {...props}
          messageTitle="请选择要操作的记录"
          butName="关闭"
          handleOk={handleOk}
        >
          <div>
            {props.global.dialog.component ? (
              <props.global.dialog.component />
            ) : (
              ""
            )}
          </div>
        </Dialog>
      ) : (
        ""
      )}
    </>
  );
};

export default modalGroup;
