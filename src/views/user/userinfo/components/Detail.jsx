import React, { useState, useEffect } from "react";
import { WeModal } from "@/components";
import SetRole from "./setRole";
import { Button } from "antd";

const SetUSer = (props) => {
  const { dispatch } = props;
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
  const [role, setRole] = useState([]);

  useEffect(() => {
    setData(props.response);
  }, [props.response]);

  const render = () => {
    dispatch
      .fetch({
        data: {
          page: 0,
          pagesize: 100,
          coding: "U0016",
        },
      })
      .then((res) => {
        setRole(res.result.list);
      });
  };

  return (
    <>
      <p>昵称: {data.nickname}</p>
      <p>
        角色：{data.role}
        <WeModal.modalForm
          name="设置管理员"
          action="edit"
          data={{ coding: "1213" }}
          renderList={props.getData}
          render={render}
          authorized={true}
        >
          <SetRole list={role} />
        </WeModal.modalForm>
      </p>
    </>
  );
};

export default SetUSer;
