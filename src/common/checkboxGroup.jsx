import React, { useState, useEffect } from "react";
import { Checkbox, Form, Row, Col } from "antd";

import R_button from "../components/button";

const Navbar = (props) => {
  const { dataSource, callback, flagList } = props;
  const [tagValue, setTagValue] = useState({}); //提交列表
  const [current, setCurrent] = useState([]); // 当前状态

  useEffect(() => {
    debugger;
    if (dataSource.flags) {
      let arr = dataSource.flags.split("|");
      let newArr = arr.slice(1, arr.length - 1);
      setCurrent([...newArr]);

      flagList.map((item) => {
        if (current.indexOf(item.tag) !== -1) {
          tagValue[item.name] = item.tag;
        }
      });
      callback({ checkboxList: JSON.stringify(tagValue) });
    }
  }, [dataSource.flags, flagList]);

  const onChange = (e, name, tag) => {
    if (e.target.checked) {
      tagValue[name] = tag;
    } else {
      delete tagValue[name];
    }
    setTagValue({ ...tagValue });
    callback({ checkboxList: JSON.stringify(tagValue) });
  };
  return (
    <>
      <Row>
        {flagList.map((item, index) => (
          <span>
            <Form.Item>
              <Checkbox
                value={item.tag}
                defaultChecked={current.indexOf(item.tag) !== -1 ? true : false}
                onChange={(e) => onChange(e, item.name, item.tag)}
              >
                {item.remark}
              </Checkbox>
            </Form.Item>
          </span>
        ))}
      </Row>
    </>
  );
};

export default Navbar;
