import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import SetRole from '../modal/setRole'
import Item from 'antd/lib/list/Item';

const SetUSer = (props) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([])

  const showDrawer = async () => {
    setVisible(true);

    const res =  await props.fetch({
      data: {
          coding: "U0016",
          page: 0,
          pagesize: 100,
      }
    })
    setData(res.result.list)
    debugger
  };

  const onClose = () => {
    setVisible(false);
    setData([])
  };

  return (
    <>
      <Button 
            type={props.type || "primary"} size={props.size || "small"}
            onClick={showDrawer}>
            {props.name || "Open"}
        </Button>
      <Drawer
        title={props.title || "Basic Drawer"}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>权限:
          {
            data.map((item)=>{

                if(item.id === props.role){
                 return item.name
                }
            })
          }
          <SetRole name="设置管理" title="设置管理员" {...props} roleData={data} />
        </p>
      </Drawer>
    </>
  );
};

export default SetUSer
