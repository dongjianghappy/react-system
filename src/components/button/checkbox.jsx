import React from "react";
import { Checkbox } from "antd";

export default (props) => {
  const { dispatch, module } = props;

  function handelChange(e) {
    debugger;

    dispatch.checkBox({
      checked: e.target.checked,
      type: "single",
      value: {
        ...props.data,
      },
    });
  }

  const checked = () =>
    module.checkedList.some((item, index) => {
      debugger;
      return item.id === props.data.id;
    });

  return (
    <div>
      <Checkbox checked={checked()} onChange={handelChange}></Checkbox>
    </div>
  );
};
