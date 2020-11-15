import React, { useState } from 'react'
import { Modal, Button, Upload } from 'antd';
import UploadWall from './upload-walls'

const Modals = (props) => {

  const [visible, setVisible] = useState(false)
  const [keyList, setKeyList] = useState([])

  const showModal = () => {
    setVisible(true)
  };

  // 点击确认后将上传图片存储到数据库中，再将图片获取图片信息展示到相应的位置【这里是单独一个接口】
  const handleOk = e => {
    alert(keyList)
    setVisible(false)

    setKeyList([])
  };

  const handleCancel = e => {
    setVisible(false)
  };

  const upload = (data, type) => {
    if(type === 'add'){
      keyList.push(data)
    }else{
      let index = keyList.indexOf(data);
      keyList.splice(index, 1);
    }
    setKeyList([...keyList])
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        上传图片
      </Button>
      <Modal
        title="上传图片"
        width={600}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={<Button type="primary" onClick={handleOk}>上传</Button>}
      >
        <UploadWall isUpload={upload} />
      </Modal>
    </>
  );
}

export default Modals
