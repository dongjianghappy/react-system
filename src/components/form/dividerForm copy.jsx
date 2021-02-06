import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  Table,
  Space,
  Popconfirm,
  Button,
  Checkbox,
  Switch,
  List,
  Divider,
  Form,
  Input,
} from "antd";
import {
  DeleteOutlined,
  UnorderedListOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Status,
  WeCheckbox,
  WeDrawer,
  R_button,
  Dialog,
  Condition,
} from "../../components/index.js";
import {
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup,
} from "../../common";

import dispatchToProps from "@/store/dispatch";

const Index = (props) => {
  const [isEdit, setIsEdit] = useState(true);
  const [field, setField] = useState({});
  const couterRef = useRef();

  useEffect(() => {
    if (isEdit) {
      setFiled();
    }
  });

  const setFiled = () => {
    props.dataSource.map((item) => (field[item.name] = item.value));
    setField(field);
  };

  const handle = async (e) => {
    setIsEdit(!isEdit);
    if (isEdit) {
      e.target.textContent = "保存";
    } else {
      e.target.textContent = "编辑";
      const aa = await props
        .updateInfo({
          m: "vue",
          coding: props.coding,
          ...field,
        })
        .then((a) => {
          props.handle();
        });
    }
  };

  const handleClick = (data) => {
    props[data.dispatch](data);
  };

  const changeInput = (e) => {
    field[e.currentTarget.id] = e.target.value;

    setField({ ...field });
  };

  const handDelete = (e) => {
    props.getDelete({
      id: e.id,
    });
  };

  return (
    <>
      {
        // formRef.current && formRef.current.setFieldsValue(props.dataSource);

        <div className="module-wrap">
          <div className="module-content basic-info">
            <div className="info-module">
              <span className="name">{props.title}</span>
              <div className="line"></div>
              <span
                data-coding=""
                className="update-info editbtn"
                onClick={(e) => handle(e)}
              >
                {isEdit ? "编辑" : "保存"}
              </span>
            </div>
            <ul className="info">
              {isEdit ? (
                props.dataSource &&
                props.dataSource.map((item, index) => (
                  <li key={item.name} style={{ padding: "5px 0px 5px 60px" }}>
                    <label>{item.remark}</label>
                    <div style={{ display: "flex" }}>
                      <div style={{ flex: 1 }}>{item.value}</div>
                      <div className="align_right" style={{ width: "50px" }}>
                        {item.isdelete === "0" ? (
                          <R_button.link
                            click={handleClick}
                            id={item.id}
                            title="删除"
                            dispatch="popup"
                            node="dialog"
                            fn="getDelete"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <Form initialValues={field}>
                  {props.dataSource &&
                    props.dataSource.map((item, index) => (
                      <Form.Item label={item.remark} name={item.name}>
                        {item.text_type === "single" ? (
                          <Input onChange={changeInput} />
                        ) : (
                          <Input.TextArea />
                        )}
                      </Form.Item>
                    ))}
                </Form>
              )}
            </ul>
          </div>
        </div>
      }
    </>
  );
};

export default Index;
