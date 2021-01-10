import React from "react";

const Iconfont = (props) => {
  const { value, callback } = props;
  const { icon } = React.$enums;

  const handelOk = (data) => {
    debugger;
    callback({ icon: data.icon });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: 16,
        }}
      >
        {icon.map((item) => (
          <span
            onClick={() => handelOk(item)}
            style={{ width: "20%", padding: "10px 0" }}
          >
            <i
              className={`iconfont icon-${item.icon}`}
              style={{ color: "#999" }}
            />
          </span>
        ))}
      </div>
    </>
  );
};

export default Iconfont;
