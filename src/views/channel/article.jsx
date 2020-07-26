import React from 'react';
import api from '../../api'
import { Card, Form, Input,  Button, Divider } from 'antd';

export default class Article extends React.Component{

    formRef = React.createRef();
    async componentDidMount(){

        const result = await api.cateDetail({
          m: 'vue',
          coding: 'K0002',
          id: this.props.match.params.id,
          n: 'cateDetail'
        })
        this.formRef.current.setFieldsValue(result.result);
    }

    // 保存数据
    onFinish = values => {
        
        // 如果有id参数，则修改，否则新增
        if(this.props.match.params.id){
            console.log('修改:', values);
            api.update({
                m: 'vue',
                coding: 'K0002',
                n: 'cateList',
                id: this.props.match.params.id,
                ...values
            })
        }else{
            console.log('新增:', values);
            api.insert({
                m: 'vue',
                coding: 'K0002',
                n: 'cateList',
                ...values
            })
        }
    };

    render(){

        return(
        <div>
            <Card title="新增分类" extra={<Button type="primary" onClick={()=>this.props.history.push('/admin/sucai')}>返回</Button>}>
                {/* 这里视频教程使用的是onSubmit */}
                <Form 
                    labelCol={{ span: 2 }}
                    wrapperCol={{ span: 14 }}
                    onFinish={this.onFinish} 
                    ref={this.formRef}
                
                >
                    {/* 基本信息 */}
                    <Divider orientation="left" plain>基本信息</Divider>
                    <Form.Item 
                        label="分类名称"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: '分类名称不能为空!',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    
                    <Form.Item 
                        label="顺序"
                        name="sort"
                    >
                        <Input defaultValue="99"  />
                    </Form.Item>
                    {/* 页面设置 */}
                    <Divider orientation="left" plain>页面设置</Divider>
                    <Form.Item 
                        label="标题"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: '分类名称不能为空!',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    
                    <Form.Item 
                        label="关键字"
                        name="sort"
                    >
                        <Input defaultValue="99"  />
                    </Form.Item>
                    <Form.Item 
                        label="描述"
                        name="sort"
                    >
                        <textarea ></textarea>
                    </Form.Item>
                    {/* 高级设置 */}
                    <Divider orientation="left" plain>高级设置</Divider>
                    <Form.Item 
                        label="分类名称"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: '分类名称不能为空!',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    
                    <Form.Item 
                        label="顺序"
                        name="sort"
                    >
                        <Input defaultValue="99"  />
                    </Form.Item>


                    <Form.Item>
                        <Button htmlType="submit" type="primary">保存</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
        )
    }
}