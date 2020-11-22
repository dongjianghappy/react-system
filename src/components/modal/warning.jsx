
import React from 'react'
import { Modal, message, Button } from 'antd';

const warning = (props) => {
  Modal.warning({
    title: '警告',
    content: React.$modalEnum.waring,
  });
}

export default warning
