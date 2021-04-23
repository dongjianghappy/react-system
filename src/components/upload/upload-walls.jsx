import React, { useState } from "react";

import { Upload, Modal, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const PicturesWall = (props) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [key, setKey] = useState("");

  // 上传前校验图片类型和大小
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    setKey(file.uid);
    props.isUpload(file.uid, "add");
    return isJpgOrPng && isLt2M;
  };

  const handleCancel = () => previewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  // 点击删除调用删除接口，将服务器上对应的session存储数据删除
  // 方法二 点击删除时不调用接口，而是将key值移除
  const onRemove = (res) => {
    props.isUpload(res.uid, "remove");
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Upload
        name="upload"
        // action="http://127.0.0.1/api/interface.php"
        action="http://127.0.0.1/admincms/api/inter_vue.php?&type=space"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        onRemove={onRemove}
        data={{ tines: "123", key: key }}
      >
        {fileList.length >= 9 ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

export default PicturesWall;
