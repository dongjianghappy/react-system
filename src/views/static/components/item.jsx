import React from 'react'
import { Row, Col } from 'antd'

export default (props) => {

    return(
        // <div
        // style={{ background: '#fff', margin: 10}}
        // > 
        // <Row style={{ textAlign: 'center'}}>
        //     <Col span={4} style={{background: '#fff',  padding:10, display: "flex", alignItems: "center", justifyContent: "center"}}>网站</Col>
        //     <Col span={5} style={{background: '#ff9da0',  padding:10}}>
        //         <p>首页</p>
        //         <p>更新</p>
        //     </Col>
        //     <Col span={5} style={{background: '#47b7cf',  padding:10}}>
        //         <p>标签</p>
        //         <p>递减</p>
        //         <p>范围</p>
        //         <p>更新</p>
        //     </Col>
        //     <Col span={5} style={{background: '#00acb0',  padding:10}}>
        //         <p>单页</p>
        //         <p>更新</p>
        //     </Col>
        //     <Col span={5} style={{background: '#009688',  padding:10}}>
        //         <p>地图</p>
        //         <p>更新</p>
        //     </Col>
        // </Row>
        // </div>

        <div
        style={{ background: '#fff', margin: 10}}
        > 
        <Row style={{ textAlign: 'center'}}>
    <Col span={4} style={{background: '#fff',  padding:10, display: "flex", alignItems: "center", justifyContent: "center"}}>{props.name}</Col>
            <Col span={5} style={{background: '#ff9da0',  padding:10}}>
                <p>首页</p>
                <p onClick={()=>props.update()}>更新</p>
            </Col>
            <Col span={5} style={{background: '#47b7cf',  padding:10}}>
                <p>栏目页</p>
                <p>更新</p>
            </Col>
            <Col span={5} style={{background: '#00acb0',  padding:10}}>
                <p>单页</p>
                <p>更新</p>
            </Col>
            <Col span={5} style={{background: '#009688',  padding:10}}>
                <p>详情页</p>
                <p>递减</p>
                <p>范围</p>
                <p>更新</p>
            </Col>
        </Row>
        </div>
    )
}