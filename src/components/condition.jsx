import React from 'react'
import { Space, Input, Button, Dropdown, Menu, DatePicker } from 'antd'

export default class Condition extends React.Component{
    Search = () => {
        console.log("sds");
    }
    render() {
        return(
            <Space>
                <DatePicker placeholder="开始时间" /> 到 <DatePicker placeholder="结束时间" />
                <Input placeholder="关键词查找" style={{width: 160}} />
                <Button type="default" onClick={this.Search}>查询</Button>
            </Space>
        )
    }
}