import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { checkButtonAuth } from "@/utils";
import { Confirm } from "@/components";
import "./module.less";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};

const BasicInfo = (props) => {
  const { dispatch, title, dataSource, data } = props;
  const [isEdit, setIsEdit] = useState(true);
  const [field, setField] = useState({});

  // 设置需要编辑字段对象
  const setFiled = () => {
    dataSource.map((item) => (field[item.name] = item.value));
    setField(field);
  };

  // 编辑、取消、保存
  const handle = async (e) => {
    if (isEdit) {
      setFiled();
    } else {
      dispatch
        .update({
          api: "updateInfo",
          data: {
            coding: data.coding,
            ...field,
          },
        })
        .then((a) => {
          message.info("编辑成功");
          props.renderList();
        });
    }
    setIsEdit(!isEdit);
  };

  // 表单更改实时更新field数据
  const changeInput = (e) => {
    field[e.currentTarget.id] = e.target.value;

    setField({ ...field });
  };

  return (
    <>
      <div className="module-wrap">
        <div className="module-content basic-infos">
          <div className="info-module">
            <span className="name">{title}</span>
            <div className="line"> </div>
            {isEdit ? (
              <>
                <span
                  data-coding=""
                  className="update-info editbtn"
                  onClick={() => handle()}
                >
                  编辑
                </span>
              </>
            ) : (
              <>
                <span
                  data-coding=""
                  className="update-info cancelbtn"
                  onClick={() => handle()}
                >
                  取消
                </span>
                <span
                  data-coding=""
                  className="update-info editbtn"
                  onClick={() => handle()}
                >
                  保存
                </span>
              </>
            )}
          </div>
          <ul className="info">
            {isEdit ? (
              dataSource &&
              dataSource.map((item, index) => (
                <li key={index}>
                  <div className="label">{item.remark}：</div>
                  <div className="content">{item.value}</div>
                  <div className="delete" style={{ width: "50px" }}>
                    {item.isdelete === "0" ? (
                      <Confirm
                        {...props}
                        name="删除"
                        config={{
                          operating: "delete",
                          message: React.$modalEnum,
                        }}
                        data={{ id: item.id, ...data }}
                        api="delete"
                        renderList={props.renderList}
                        authorized={true}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </li>
              ))
            ) : (
              <Form initialValues={field} {...layout} labelAlign="left">
                {dataSource &&
                  dataSource.map((item, index) => (
                    <Form.Item label={item.remark} name={item.name} key={index}>
                      {item.text_type === "single" ? (
                        <Input onChange={changeInput} />
                      ) : (
                        <Input.TextArea onChange={changeInput} />
                      )}
                    </Form.Item>
                  ))}
              </Form>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
