import React, { useState, useEffect } from "react";
import {} from "antd";
import { WeModal } from "@/components";

const Preview = (props) => {
  const { params, value, renderDetail, callback } = props;
  // const [image, setImage] = useState([]);

  // const setValue = (data) => {
  //   setImage(data);
  // };

  return (
    <>
      <div className="space-wrap" style={{ display: "flex" }}>
        <div
          className="space-picture p10"
          style={{ background: "#fafafa", flex: 2, height: "auto" }}
        >
          <WeModal.Picture src={value && value[0]}>
            <img src={value && value[0]} width="250" height="100" alt="" />
          </WeModal.Picture>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <WeModal.Space
              authorized={true}
              data={params.data}
              callback={callback}
              // setValue={setValue}
            >
              <div
                style={{
                  background: "#fafafa",
                  border: "2px dashed #eee",
                  height: "150px",
                  width: "150px",
                  lineHeight: "150px",
                  textAlign: "center",
                }}
              >
                <i
                  className="iconfont icon-add font30"
                  style={{ color: "#666 !important" }}
                ></i>
              </div>
            </WeModal.Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
