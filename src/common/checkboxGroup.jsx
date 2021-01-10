import React, { useState, useEffect } from "react";
import { Checkbox, Form, Row, Col } from "antd";

import R_button from "../components/button";

const Navbar = (props) => {
  const { dataSource, callback, flagList } = props;

  const [tagValue, setTagValue] = useState({}); //提交列表
  const [current, setCurrent] = useState([]); // 当前状态

  useEffect(() => {
    if (dataSource.flags) {
      let arr = dataSource.flags.split("|");
      let newArr = arr.slice(1, arr.length - 1);
      setCurrent([...newArr]);

      flagList.map((item) => {
        if (newArr.indexOf(item.tag) !== -1) {
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
    // defaultChecked只在初始设置有效，只能设置一次，刷新页面请求数据时，接口还没有返回值，此时就已经设置了defaultChecked为undefined了，接口返回数据时虽然数据改了，但是defaultChecked并不会更改了
    // 如果设置了一个key值，当key值发生变化时，React遍历dom时，会发现key值发生了变化，进而触发组件渲染，更新组件后defaultChecked就会发生变化
    <>
      <Row>
        {flagList.map((item, index) => (
          <span>
            <Form.Item>
              <Checkbox
                key={current[0]}
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
