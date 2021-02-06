import React, { useState, useEffect } from "react";
import { WeModal, Quick } from "@/components";
import Modal from "./button-add";

const Detail = (props) => {
  const { dispatch, data } = props;
  const [response, setResponse] = useState([]);

  useEffect(() => {
    setResponse(props.response && props.response.list);
  }, [props.response && props.response.list]);

  return (
    <>
      <table width="100%" className="table-striped col-left-13">
        <tr>
          <td className="col-md-2">按钮名称</td>
          <td className="col-md-1">顺序</td>
          <td className="col-md-7">权限标记</td>
          <td className="col-md-2">操作</td>
        </tr>

        {response &&
          response.map((item) => (
            <tr>
              <td>
                <Quick
                  {...props}
                  title={item.name}
                  data={{ id: item.id, field: "name", coding: data.coding }}
                  authorized={true}
                />
              </td>
              <td>
                <Quick
                  {...props}
                  title={item.sort}
                  data={{ id: item.id, field: "sort", coding: data.coding }}
                  authorized={true}
                />
              </td>
              <td>
                <Quick
                  {...props}
                  title={item.authority}
                  data={{
                    id: item.id,
                    field: "authority",
                    coding: data.coding,
                  }}
                  authorized={true}
                />
              </td>
              <td>删除</td>
            </tr>
          ))}
      </table>
      <WeModal.modalForm
        name="新增按钮权限"
        action="add"
        dispatch={dispatch}
        data={{ coding: data.coding, fid: data.fid, type: 1 }}
        authorized={true}
      >
        <Modal />
      </WeModal.modalForm>
    </>
  );
};

export default Detail;
