import React, { useState, useEffect } from "react";
import { Switch } from "antd";

const Status = (props) => {
  const { dispatch, data } = props;
  const [item, setItem] = useState({});

  useEffect(() => {
    setItem(data.item);
  }, [data.item]);

  return (
    <Switch
      disabled={!props.authorized}
      checkedChildren={data.field !== "checked" ? "NO" : ""}
      unCheckedChildren={data.field !== "checked" ? "OFF" : ""}
      size="small"
      defaultChecked={item[data.field] === "1" ? true : false}
      checked={item[data.field] === "1" ? true : false}
      onChange={() => {
        dispatch
          .update({
            api: "updateStatus",
            data: {
              coding: data.coding,
              id: item.id,
              status: data.field,
            },
          })
          .then((res) => {
            item[res.result.type] = res.result.value;
            setItem({ ...item });
          });
      }}
    />
  );
};

Status.defaultProps = {
  action: "add",
  isText: false,
};

export default Status;
