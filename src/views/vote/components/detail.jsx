import React, { useState, useEffect } from "react";
import { Card, Form, Button, Input, Radio, DatePicker, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { WeAlert } from "@/components";

const Detail = (props) => {
  const { dataSource, callback } = props;
  const [vote, setVote] = useState(false);
  const arr = {
    image: "",
    sort: "",
    static: "",
    status: "",
    vote: "",
    votetitle: "",
  };

  useEffect(() => {
    callback({ list: [arr] });
  }, []);

  useEffect(() => {
    setVote(dataSource.choose === "1" ? true : false);
  }, [dataSource.choose]);

  const onInput = (e, index) => {
    dataSource.list.map((item, i) => {
      if (i === index) {
        item.votetitle = e.target.value;
      }
    });

    callback({ list: dataSource.list });
  };

  const use = (index) => {
    dataSource.list.map((item, i) => {
      if (i === index) {
        item.status = item.status === "1" ? "0" : "1";
      }
    });

    callback({ list: dataSource.list });
  };

  const add = () => {
    if (dataSource.list) {
      dataSource.list.push(arr);
    } else {
      dataSource.list = [arr];
    }

    callback({ list: dataSource.list });
  };

  const remove = (index) => {
    dataSource.list.splice(index, 1);
    callback({ list: dataSource.list });
  };

  const CaoZuo = (index, status) => {
    if (status === "1" || status === "0") {
      return (
        <span style={{ marginLeft: 10 }}>
          <span onClick={() => use(index)}>
            {status === "1" ? "关闭" : "启用"}
          </span>
        </span>
      );
    } else {
      return (
        <span style={{ marginLeft: 10 }}>
          <span onClick={() => remove(index)}>删除</span>
        </span>
      );
    }
  };

  return (
    <>
      <div style={{ background: "#f0f0f0", padding: 10 }}>
        <WeAlert description="投票设置后，必须插入图文消息中才可生效。投票将统计该投票在各个渠道的综合结果总和，包括群发消息，自动回复，自定义菜单等。"></WeAlert>
        <Form.Item label="投票名称" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="截止时间" name="last_time"></Form.Item>
        <Form.Item label="投票权限" name="grade">
          <Radio.Group>
            <Radio value="1" defaultChecked>
              所有人都可参与
            </Radio>
            <Radio value="0">仅关注我的人可参与</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="投票说明" name="content">
          <Input.TextArea />
        </Form.Item>
      </div>
      <div style={{ background: "#f0f0f0", padding: 10 }}>
        <h3>选项管理</h3>
        <Form.Item label="标题" name="votetitle">
          <Input />
        </Form.Item>
        <Form.Item label="投票种类" name="choose">
          <Radio.Group>
            <Radio value="0" onClick={() => setVote(false)}>
              单投
            </Radio>
            <Radio value="1" onClick={() => setVote(true)}>
              多投
            </Radio>
          </Radio.Group>
        </Form.Item>
        {vote && (
          <Form.Item label="票数(每人)" name="vote">
            <Input defaultValue="2" />
          </Form.Item>
        )}
        <Form.Item label="选择" name="list">
          {dataSource.list &&
            dataSource.list.map((item, index) => (
              <Form.Item label={`选项${index + 1}`}>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      background: "#fff",
                      marginRight: 5,
                      border: "1px solid #d9d9d9",
                      width: 40,
                      height: 40,
                    }}
                  >
                    {item.image}
                  </div>
                  <div style={{ flex: 1 }}>
                    <Input
                      value={item.votetitle}
                      placeholder="请输入选项名称"
                      onChange={(e) => onInput(e, index)}
                      style={{ width: "90%", height: 40 }}
                    />
                    {CaoZuo(index, item.status)}
                  </div>
                </div>
              </Form.Item>
            ))}
        </Form.Item>
        <Form.Item>
          <span onClick={add}>新增选项</span>
        </Form.Item>
      </div>
    </>
  );
};

export default Detail;
