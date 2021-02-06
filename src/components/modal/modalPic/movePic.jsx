import {
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  CaretUpFilled,
  CaretUpOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React, { useState, useEffect } from "react";

const Editor = (props) => {
  const [visible, setVisible] = useState(false);

  const [content, setContent] = useState([]);
  const [current, setCurrent] = useState(""); // 当保存成功后状态消失，其实在页面顺序更新后，在列表右侧可以新增一个刷新的按钮

  const dataList = [
    {
      name: "张三",
      sex: "男",
      birthday: "12",
    },
    {
      name: "李四",
      sex: "男",
      birthday: "12",
    },
    {
      name: "王五",
      sex: "男",
      birthday: "12",
    },
    {
      name: "老六",
      sex: "男",
      birthday: "12",
    },
  ];

  useEffect(() => {
    setContent(dataList);
  }, []);

  const onMove = (direction, source, moveItem, index) => {
    const newData = [...source];
    let item = "";
    switch (direction) {
      case "up":
        newData.splice(index, 1);
        newData.splice(index - 3, 0, moveItem);
        // item = newData.splice(index + 3, 1, moveItem)[0]; // 这一步是将要替换的删除，并将移动的插入，最后返回被删除的数组
        // newData[index] = item;
        break;

      case "right":
        item = newData.splice(index + 1, 1, moveItem)[0]; // 这一步是将要替换的删除，并将移动的插入，最后返回被删除的数组
        newData[index] = item;
        break;

      case "down":
        newData.splice(index, 1);
        newData.splice(index + 3, 0, moveItem);
        // item = newData.splice(index - 3, 1, moveItem)[0]; // 这一步是将要替换的删除，并将移动的插入，最后返回被删除的数组
        // newData[index] = item;
        break;

      case "left":
        item = newData.splice(index - 1, 1, moveItem)[0]; // 这一步是将要替换的删除，并将移动的插入，最后返回被删除的数组
        newData[index] = item;
        break;

      default:
        break;
    }

    props.callback(newData);
  };

  return (
    <div>
      <div>
        <span
          style={{
            position: "absolute",
            right: 16,
            bottom: 16,
            zIndex: 2000,
            width: 35,
            height: 35,
            color: "#fff",
          }}
        >
          <span
            onClick={() =>
              onMove("up", props.data.source, props.data.item, props.data.index)
            }
            style={{ position: "absolute", top: -12, left: 10, fontSize: 20 }}
          >
            <ArrowUpOutlined />
          </span>
          <span
            onClick={() =>
              onMove(
                "right",
                props.data.source,
                props.data.item,
                props.data.index
              )
            }
            style={{ position: "absolute", right: -10, fontSize: 20 }}
          >
            <ArrowRightOutlined />
          </span>
          <span
            onClick={() =>
              onMove(
                "down",
                props.data.source,
                props.data.item,
                props.data.index
              )
            }
            style={{
              position: "absolute",
              bottom: -10,
              left: 10,
              fontSize: 20,
            }}
          >
            <ArrowDownOutlined />
          </span>
          <span
            onClick={() =>
              onMove(
                "left",
                props.data.source,
                props.data.item,
                props.data.index
              )
            }
            style={{ position: "absolute", left: -4, fontSize: 20 }}
          >
            <ArrowLeftOutlined />
          </span>
        </span>
      </div>

      {/* <table width="100%">
        <tr>
          <td>姓名</td>
          <td>性别</td>
          <td>年龄</td>
          <td>操作</td>
        </tr>
        {content.map((item, index) => (
          <tr style={{ background: index === current ? "#f00" : "none" }}>
            <td>{item.name}</td>
            <td>{item.sex}</td>
            <td>{item.birthday}</td>
            <td>
              <div style={{ width: 100, height: 32, float: "left" }}>
                {index !== 0 ? (
                  <Button onClick={() => onMove("up", item, index)}>上移动</Button>
                ) : (
                  ""
                )}
              </div>
              <div style={{ width: 100, height: 32, float: "left" }}>
                {index !== content.length - 1 ? (
                  <Button onClick={() => onMove("down", item, index)}>下移动</Button>
                ) : (
                  ""
                )}
              </div>
            </td>
          </tr>
        ))}
      </table> */}
    </div>
  );
};

export default Editor;
