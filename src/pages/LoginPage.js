import {Button, Checkbox, Form, Input} from 'antd';
import Layout from "antd/es/layout";
import ArrowRightOutlined from "@ant-design/icons/lib/icons/ArrowRightOutlined";
import {login} from "../constant/ajax_config";

const {Header, Content, Footer, Sider} = Layout;

const onFinish = (values) => {
    login();
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const LoginForm = () => (
    <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        style={{
            maxWidth: 3500,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
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
                span: 16,
            }}
        >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >

            <Button htmlType="submit" style={{color: "#af50b6"}}>
                <ArrowRightOutlined/>
                进入心情空间
            </Button>
        </Form.Item>
    </Form>
);

const LoginPage = () => (

    <Layout style={{height: "600px"}}>
        <Header style={{height:"200px"}}/>
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