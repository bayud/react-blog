import React, {useState} from 'react';

import {Button, Checkbox, Form, Input, Alert, Layout, Col, Row} from 'antd';


import ArrowRightOutlined from "@ant-design/icons/lib/icons/ArrowRightOutlined";
import {login} from "../constant/ajax_config";
import {useNavigate} from 'react-router-dom';

const {Header, Content, Footer} = Layout;


const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const LoginForm = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [errorCount, setErrorCount] = useState(0);

    const navigate = useNavigate();
    const onFinish = (values) => {
        login(values, () => navigate('/'),
            (error) => {
                console.log("error_login...", error);
                setIsDialogOpen(true);
                setErrorCount((pre) => pre + 1);

            });
    };

    return (
        <Layout>
            <Layout>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 8,
                    }}
                    style={{
                        maxWidth: 6500,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={(values) => onFinish(values)}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '输入用户名',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '输入密码！',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 8,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 8,
                        }}
                    >

                        <Button htmlType="submit" style={{color: "#af50b6"}}>
                            <ArrowRightOutlined/>
                            进入心情空间
                        </Button>
                    </Form.Item>
                </Form>
            </Layout>
            {
                isDialogOpen && ([...Array(errorCount).keys()]).map((item, i) =>
                    (
                        <Row>
                            <Col span={8}/>
                            <Col span={8}>
                                <Alert
                                    message="用户名/密码不正确"
                                    type="error"
                                    showIcon
                                    closable
                                />
                            </Col>
                        </Row>

                    ))
            }
        </Layout>
    );
};

const LoginPage = () => (

    <Layout style={{height: "600px"}}>
        <Header style={{height: "200px"}}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Content>
            <LoginForm/>
        </Content>
        <Footer style={{height: "200px"}}/>
    </Layout>

);

export default LoginPage;