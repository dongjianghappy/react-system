import React from 'react';
import {Input, Button, List } from 'antd'



const TodoListUI = (props) => {
    return(
        <div>
            <div>
                <Input placeholder={props.inputValue} value={props.inputValue} onChange={(e) => props.inputChange(e)} style={{width:"350px"}} />
                <Button onClick={() => props.addItem()}>添加</Button>
            </div>
            <List
                size="large"
                bordered
                dataSource={props.list}
                renderItem={(item, index) => <List.Item onClick={() => props.deleteItem(index)} >{item}</List.Item>}
            />
        </div>
        
    )
    }


export default TodoListUI