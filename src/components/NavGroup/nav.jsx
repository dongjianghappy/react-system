import React from "react";
import { Button } from "antd";
import "./style.less";

const Nav = (props) => {
  const handelClick = () => {
    props.keyFunction && props.keyFunction(props.value);
    props.onChange && props.onChange(props.value);
  };

  return (
    <>
      <Button
        className={`menusss ${props.tabsKey === props.value && "current"}`}
        onClick={handelClick}
      >
        {props.icon ? <i className={`iconfont icon-${props.icon}`} /> : ""}
        {props.name}
      </Button>
    </>
  );
};

export default Nav;
