import React, { useState } from "react";
import { Avatar, Modal, message, Button, Form, Input } from "antd";
import warning from "@/components/modal/warning";
import "../letter.less";

const Reply = (props) => {
  const { dispatch } = props;

  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
  const [replyContent, setreplyContent] = useState([]);
  const [form] = Form.useForm();

  const showModal = () => {
    if (!props.authorized) {
      return warning();
    }

    setVisible(true);
    dispatch
      .fetch({
        api: "viewMessageBoard",
        data: {
          ...props.data,
        },
      })
      .then((res) => {
        debugger;
        setData(res.result);
      });
  };

  const onFinish = (values) => {
    dispatch
      .fetch({
        api: "replyMessageBoard",
        data: {
          fid: props.data.id,
          ...values,
        },
      })
      .then((res) => {
        data.reply_list.push({
          username: "东江哥",
          content: values.content,
        });
        setData({ ...data });
        props.renderList();
      });
    form.resetFields();
    setreplyContent([...replyContent]);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  return (
    <>
      <Button type="text" onClick={showModal}>
        {props.name || "reply"}
      </Button>
      <Modal
        title="回复留言"
        visible={visible}
        onCancel={handleCancel}
        maskClosable={false}
        footer={false}
      >
        <div className="reply">
          <ul>
            <li>
              <div className="user-info">
                <Avatar size="small" className="photos" />
                {data.nickname}
              </div>
              <div className="content">{data.content}</div>
            </li>
            {data.reply_list &&
              data.reply_list.map((item, index) => (
                <li className="reply-list">
                  <div className="manager-info">
                    <Avatar size="small" className="photos" />
                    {item.username}
                  </div>
                  <div className="content">{item.content}</div>
                  {/* 是的呀。很好用哦 */}
                </li>
              ))}
          </ul>
        </div>
        <div>
          <Form form={form} onFinish={onFinish}>
            <Form.Item
              name="content"
              rules={[{ required: true, message: "回复内容不能为空！" }]}
            >
              <Input.TextArea placeholder="回复留言"></Input.TextArea>
            </Form.Item>
            <Form.Item style={{ marginBottom: 0 }}>
              <Button type="primary" htmlType="submit">
                回复
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default Reply;
