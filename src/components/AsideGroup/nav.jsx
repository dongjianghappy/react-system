import React from "react";
import { Button } from "antd";
import "./style.less";

const Nav = (props) => {
  const handelClick = () => {
    props.keyFunction(props.value);
    props.onChange(props.value);
  };

  return (
    <>
      <div
        className={`aside-list ${props.tabsKey === props.value && "current"}`}
        onClick={handelClick}
      >
        {props.name}
      </div>
    </>
  );
};

export default Nav;
