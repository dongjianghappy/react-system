import React, { useState } from "react";
import "./style.less";

const NavGroup = (props) => {
  const [key, setKey] = useState("1");

  const keyFunction = (res) => {
    setKey(res);
  };
  debugger;
  return (
    <>
      {props.children.length > 0 ? (
        <>
          <div className="nav-wrap">
            {props.children.map((children) => (
              <>
                {children &&
                  React.cloneElement(children, {
                    ...props,
                    keyFunction,
                    tabsKey: key,
                  })}
              </>
            ))}
            {/* <span className="right"></span> */}
            {props.extra}
          </div>
          <div>{props.children[key - 1].props.children}</div>
        </>
      ) : (
        <>
          <div className="nav-wrap">
            {props.children &&
              React.cloneElement(props.children, {
                ...props,
                keyFunction,
                tabsKey: key,
              })}
            {/* <span className="right"></span> */}
            {props.extra}
          </div>
          <div>{props.children.props.children}</div>
        </>
      )}
    </>
  );
};

export default NavGroup;
