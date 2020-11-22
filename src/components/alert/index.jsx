import React from "react";
import { Alert } from "antd";

const WeAlert = (props) => {
  return (
    <Alert
      message={(props.config && props.config.title) || props.message}
      description={(props.config && props.config.content) || props.description}
      type={props.type}
      closable={props.close}
      showIcon
    />
  );
};

export default WeAlert;
