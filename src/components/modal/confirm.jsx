import React from 'react'
import { Modal, message, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const Confirm = (props) => {

  const showConfirm = () => {
    Modal.confirm({
      title: props.config.title,
      icon: <ExclamationCircleOutlined />,
      content: props.config.content,
      onOk() {
        props.fetch({
          api: props.api,
          data: {
            coding: props.coding,
            ...props.data
          }
        }).then(() => {
          message.info(props.config.info);
          props.renderList && props.renderList()
        })
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  // // 警告提示
  const showWarning = () => {
    Modal.warning({
      title: '警告',
      content: props.config.waring,
    });
  }




  const Text = () => (
    <>
    <span onClick={!props.authorized ? showConfirm : showWarning}>
    {
      props.icon ?
      <i className={`iconfont icon-${props.icon}`} />
      : ""
    }
    {props.name}</span>
    </>
  )

  const Buttons = () => (
    <>
    <Button onClick={props.authorized ? showConfirm : showWarning}>
    {
      props.icon ?
      <i className={`iconfont icon-${props.icon}`} />
      : ""
    }
    {props.name}</Button>
    </>
  )

  return (
    <>
      {
        props.type === "text" ? <Text /> : <Buttons />
      }
    </>
  )
}

export default Confirm
