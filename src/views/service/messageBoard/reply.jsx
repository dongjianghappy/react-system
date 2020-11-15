import React, { useState } from 'react'
import { Avatar, Modal, message, Button, Form, Input } from 'antd';
import './letter.less';


const Replay = (props) => {

  const [visible, setVisible] = useState(false)
  const [replayContent, setReplayContent] =  useState([])
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true)
  };

  const onFinish =values => {

    replayContent.push({
      username: "东江哥",
      content: values.content
    })
    form.resetFields()
    setReplayContent([...replayContent])

  };

  const handleCancel = e => {
    setVisible(false)
  };

    return (
      <>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          title="回复留言"
          visible={visible}
          onCancel={handleCancel}
          maskClosable={false}
          footer={false}
        >
          <div className="replay">
            <ul>
              <li>
                <div className="user-info">
                  <Avatar size="small" className="photos" />凯晨
                </div>
                <div className="content">你在用antd design吗？这个很好用哦，导航和分类子类添加哦</div>
              </li>
              {
                replayContent.map((item, index) => (
                  <li className="replay-list">
                  <div className="manager-info">
                    <Avatar size="small" className="photos" />{item.username}
                  </div>
                  <div className="content">{item.content}</div>
                  {/* 是的呀。很好用哦 */}
                </li>
                ))
              }

            </ul>
          </div>
          <div>
          <Form form={form} onFinish={onFinish}>
            <Form.Item name="content" rules={[{ required: true, message: '回复内容不能为空！' }]}>
              <Input.TextArea placeholder="回复留言"></Input.TextArea>
            </Form.Item>
            <Form.Item style={{marginBottom: 0}}>
              <Button type="primary" htmlType="submit" >回复</Button>
            </Form.Item>
          </Form>
          </div>
        </Modal>
      </>
    );
}


export default Replay
