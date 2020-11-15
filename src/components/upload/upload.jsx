import React, { useState, useEffect } from 'react'

import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

// 上传前校验图片类型和大小
function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const UploadImg = (props) => {

  // 设置图片数据
  const [loading, setLoading] = useState(false)
  const [img, setImg] = useState("")

  useEffect(()=>{
    setImg(props.image)
  }, [props.image])

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl => {
        setLoading(false)
        setImg(imageUrl)
      }
      );
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传</div>
    </div>
  );
  return (
    <Upload
      name="upload"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="http://127.0.0.1/admincms/api/inter_vue.php?&type=partner"
      beforeUpload={beforeUpload}
      onChange={handleChange}
      data={{n:"uploadImage"}}
    >
      {img ? <img src={img} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
    </Upload>
  );
}

export default UploadImg
